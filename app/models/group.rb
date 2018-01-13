class Group < ApplicationRecord
　has_many :members
  has_many :users, through: :group_users
  validates :name, presence: true
end
