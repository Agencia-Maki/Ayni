class Contract < ApplicationRecord
  belongs_to :rol
  belongs_to :area
  belongs_to :personal_record
end
