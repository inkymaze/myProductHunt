class Product < ApplicationRecord
  validates :name, :desc, :product_url, :hunter_id, presence: true
  validates :name, uniqueness: true

  belongs_to :user,
    primary_key: id,
    foreign_key: :hunter_id,
    class_name: "User"

end
