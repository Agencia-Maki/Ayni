class CreateCustomerContacts < ActiveRecord::Migration[7.0]
  def change
    create_table :customer_contacts do |t|
      t.string :full_name
      t.string :company_position
      t.string :phone
      t.string :whatsapp
      t.string :email
      t.references :customer, null: false, foreign_key: true
      t.timestamps
    end
  end
end
