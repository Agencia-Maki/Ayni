class CreateCustomerPaymentTypes < ActiveRecord::Migration[7.0]
  def change
    create_table :customer_payment_types do |t|
      t.string :name
      t.text :description
    end
  end
end
