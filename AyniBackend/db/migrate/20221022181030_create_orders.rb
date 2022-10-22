class CreateOrders < ActiveRecord::Migration[7.0]
  def change
    create_table :orders do |t|
      t.string :order_code
      t.string :customer_name
      t.decimal :amount_without_igv
      t.decimal :total_amount
      t.string :validity_date
      t.date :delivery_at
      t.string :reference_body
      t.references :user, null: false, foreign_key: true
      t.references :customer, null: false, foreign_key: true
      t.timestamps
    end
    add_index :orders, :order_code, unique: true
  end
end
