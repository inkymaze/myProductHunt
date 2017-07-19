class AddHunterId < ActiveRecord::Migration[5.0]
  def change
    add_column :products, :hunter_id, :integer
  end

  add_index :products, :hunter_id, unique: true
end
