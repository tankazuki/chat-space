class MessagesController < ApplicationController
  before_action :set_group

  def index
      @message = Message.new
      @messages = @groups.messages.includes(:user)	
  end
  
  def create
    @message = @groups.messages.new(message_params)
    if @message.save
       redirect_to group_messages_path(@groups), notice: "メッセージの送信に成功しました"
    else 
      flash.now[:alert] = "メッセージの送信に失敗しました"
      render :index
    end   
  end

    private
    def message_params
      params.require(:message).permit(:body, :image).merge(user_id: current_user.id, group_id: params[:group])  
   end

    def set_group
      @groups = Group.find(params[:group_id])
    end	


end
