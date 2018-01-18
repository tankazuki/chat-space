class GroupsController < ApplicationController 
  before_action :set_group, only: [:edit, :update]

  def index
  end	

  def new
      @group = Group.new
      @users = User.where.not(id: current_user.id)
  end
	
  def create
      @group = Group.new(group_params)
      @group.users << current_user
   if @group.save
      redirect_to root_path, notice: "グループの作成が完了しました"
   else
      flash.now[:alert] = "グループの作成に失敗しました"
      render :new
   end
  end	

  def edit
      @users = User.where.not(id: current_user.id)
  end	

  def update
   if @group.update(group_params)
      @group.users << current_user
      redirect_to root_path, notice: "グループの編集が完了しました"
   else
      flash.now[:alert] = "グループの編集に失敗しました"
      render :edit
   end
  end    	


  private
  def group_params
      params.require(:group).permit(:name, { user_ids: [] } )
  end	

  def set_group
      	@group = Group.find(params[:id])
  end	
end
