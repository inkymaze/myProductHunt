class CreateUpvotes < ActiveRecord::Migration[5.0]
  def change
    create_table :upvotes do |t|
      t.integer :product_id, null: false
      t.integer :hunter_id, null: false
    end
    add_index :upvotes, :product_id
    add_index :upvotes, :hunter_id
  end
end
