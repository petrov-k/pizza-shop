class CreateOrders < ActiveRecord::Migration[6.1]
  def change
    create_table :orders do |t|
      t.text :name
      t.text :phone
      t.text :address
      t.text :products      
    end
  end
end
