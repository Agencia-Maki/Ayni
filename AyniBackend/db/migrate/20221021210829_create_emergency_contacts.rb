class CreateEmergencyContacts < ActiveRecord::Migration[7.0]
  def change
    create_table :emergency_contacts do |t|
      t.string :last_name
      t.string :first_name
      t.string :phone_number
      t.string :relationship
      t.belongs_to :personal_record, null: false, foreign_key: true
    end
  end
end
