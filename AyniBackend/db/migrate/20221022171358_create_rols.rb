class CreateRols < ActiveRecord::Migration[7.0]
  def change
    create_table :rols do |t|
      t.string :name
      t.string :slug
      t.references :area, null: false, foreign_key: true
    end
  end
end
