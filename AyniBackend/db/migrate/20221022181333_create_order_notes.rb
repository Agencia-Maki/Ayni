class CreateOrderNotes < ActiveRecord::Migration[7.0]
  def change
    create_table :order_notes do |t|
      t.text :description
      t.references :order, null: false, foreign_key: true
    end
  end
end
