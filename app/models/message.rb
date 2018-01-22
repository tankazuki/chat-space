class Message < ApplicationRecord
  mount_uploader :image, ImageUploader
  belongs_to :group
  belongs_to :user

  validates :body, presence: true

  def display_date(message)
  	message.created_at.to_s(:default)
  end
	
end
