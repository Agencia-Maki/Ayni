class CreateCustomers < ActiveRecord::Migration[7.0]
  def change
    create_table :customers do |t|
      t.integer :document_type
      t.string :full_name
      t.string :full_address
      t.string :contact_phone
      t.string :payment_type_name
      t.string :contry
      t.string :contry_code
      t.string :document_number
      t.references :customer_payment_type, null: false, foreign_key: true
      t.references :user, null: false, foreign_key: true
    end
  end
end
