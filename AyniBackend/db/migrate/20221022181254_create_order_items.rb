class CreateOrderItems < ActiveRecord::Migration[7.0]
  def change
    create_table :order_items do |t|
      t.text :description
      t.integer :quantity
      t.decimal :amount
      t.decimal :total_amount
      t.references :order, null: false, foreign_key: true
    end
  end
end
