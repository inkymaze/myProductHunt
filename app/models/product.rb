class Product < ApplicationRecord
  validates :name, :desc, :product_url, presence: true
  validates :name, uniqueness: true

  belongs_to :user,
    primary_key: :id,
    foreign_key: :hunter_id,
    class_name: "User"

end
