class CreateComments < ActiveRecord::Migration[5.0]
  def change
    create_table :comments do |t|
      t.integer :hunter_id, null: false
      t.integer :product_id, null: false
      t.string :body, null: false

      t.timestamps
    end
    add_index :comments, :hunter_id
    add_index :comments, :product_id
  end
end
