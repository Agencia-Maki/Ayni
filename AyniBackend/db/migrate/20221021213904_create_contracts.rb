class CreateContracts < ActiveRecord::Migration[7.0]
  def change
    create_table :contracts do |t|
      t.string :contract_code
      t.date :contract_start_date
      t.string :contract_end_date
      
      t.belongs_to :personal_record, null: false, foreign_key: true
      t.belongs_to :rol, null: false, foreign_key: true
      t.integer :contract_type
      t.integer :contract_status
      t.timestamps
    end
    add_index :contracts, :contract_code, unique: true
  end
end
