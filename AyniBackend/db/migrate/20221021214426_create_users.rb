class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :full_name
      t.string :document_number
      t.string :password_digest
      t.belongs_to :personal_record, null: false, foreign_key: true
      t.references :rol, null: false, foreign_key: true
      t.timestamps
    end
    add_index :users, :document_number, unique: true
  end
end