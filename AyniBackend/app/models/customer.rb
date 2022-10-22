class Customer < ApplicationRecord
  belongs_to :customer_payment_type
  belongs_to :user
end
