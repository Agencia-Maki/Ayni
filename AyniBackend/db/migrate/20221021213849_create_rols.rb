class CreateRols < ActiveRecord::Migration[7.0]
  def change
    create_table :rols do |t|
      t.string :name
      t.string :slug
    end
  end
end
