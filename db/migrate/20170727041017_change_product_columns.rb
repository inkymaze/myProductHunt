class ChangeProductColumns < ActiveRecord::Migration[5.0]
  def change
    rename_column :products, :desc, :description
    rename_column :products, :product_url, :product_URL
  end
end
