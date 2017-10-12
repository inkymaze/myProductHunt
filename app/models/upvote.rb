class Upvote < ApplicationRecord
  validates :hunter_id, :product_id, presence: true
  # validate user can only upvote once


  belongs_to :user,
  primary_key: :id,
  foreign_key: :hunter_id,
  class_name:  :User

  belongs_to :product,
  primary_key: :id,
  foreign_key: :product_id,
  class_name:  :Product
end
