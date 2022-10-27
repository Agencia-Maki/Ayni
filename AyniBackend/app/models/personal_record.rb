class PersonalRecord < ApplicationRecord

  enum gender: [:male, :female, :others]
  enum pension_system: [:registered, :unregistered]
  enum pension_system_type: [:AFP, :ONP, :NR]
  enum receipt_of_honorarium: [:yes, :no]
  enum document_type: [:DNI, :CE, :PASSPORT]
  enum status: [:active, :inactive]

end
