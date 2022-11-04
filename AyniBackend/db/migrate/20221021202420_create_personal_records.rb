class CreatePersonalRecords < ActiveRecord::Migration[7.0]
  def change
    create_table :personal_records do |t|
      t.string :mother_last_name
      t.string :father_last_name
      t.string :first_name
      t.string :nationality
      t.string :date_of_birth
      t.string :document_number
      t.string :place_of_birth
      t.string :age
      t.string :full_address
      t.string :province
      t.string :department
      t.string :bank_account_number
      t.string :civil_status
      t.string :first_phone_number
      t.string :second_phone_number
      t.string :personal_email

      t.integer :gender
      t.integer :pension_system
      t.integer :pension_system_type
      t.integer :receipt_of_honorarium
      t.integer :document_type
      t.integer :status
      t.belongs_to :bank, null: false, foreign_key: true
      t.timestamps
    end
  end
end
