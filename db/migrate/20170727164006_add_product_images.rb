class AddProductImages < ActiveRecord::Migration[5.0]
  def change
    add_column :products, :image_two_url, :string
    add_column :products, :image_three_url, :string
    add_column :products, :image_four_url, :string
    add_column :products, :image_five_url, :string
  end
end
