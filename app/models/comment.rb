class Comment < ApplicationRecord
  validates :hunter_id, :product_id, :body, presence: true

  belongs_to :user,
  primary_key: :id,
  foreign_key: :hunter_id,
  class_name:  :User

  belongs_to :product,
  primary_key: :id,
  foreign_key: :product_id,
  class_name:  :Product
end
