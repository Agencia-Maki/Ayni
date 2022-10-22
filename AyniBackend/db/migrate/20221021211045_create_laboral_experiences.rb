class CreateLaboralExperiences < ActiveRecord::Migration[7.0]
  def change
    create_table :laboral_experiences do |t|
      t.string :company_name
      t.string :company_address
      t.string :company_sector
      t.string :company_position
      t.string :company_start_date
      t.string :company_end_date
      t.string :company_reference_name
      t.string :company_reference_phone_number
      t.belongs_to :personal_record, null: false, foreign_key: true
    end
  end
end
