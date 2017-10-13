class Product < ApplicationRecord
  validates :name, :description, :product_URL, presence: true
  validates :name, uniqueness: true

  belongs_to :user,
    primary_key: :id,
    foreign_key: :hunter_id,
    class_name: "User"

  has_many :upvotes, dependent: :destroy,
    primary_key: :id,
    foreign_key: :product_id,
    class_name: "Upvote"

  has_many :comments, dependent: :destroy,
  primary_key: :id,
  foreign_key: :product_id,
  class_name: "Comment"

    def self.search(query)
      query = query.split("+").join(" ")
      # query = "%#{query.downcase}%"
      self.where("lower(name) LIKE ?", query)
    end
end
