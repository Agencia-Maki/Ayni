class CreateContracts < ActiveRecord::Migration[7.0]
  def change
    create_table :contracts do |t|
      t.string :contract_code
      t.string :contract_start_date
      t.string :contract_end_date
      t.integer :contract_type
      t.integer :contract_status
      t.references :rol, null: false, foreign_key: true
      t.references :area, null: false, foreign_key: true
      t.references :personal_record, null: false, foreign_key: true
      t.timestamps
    end
  end
end
