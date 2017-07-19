class AddHunterId < ActiveRecord::Migration[5.0]
  def change
    add_column :products, :hunter_id, :integer
  end

  
end
