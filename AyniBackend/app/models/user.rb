class User < ApplicationRecord
  # callbacks
  before_create :set_default_status

  # config api guard
  api_guard_associations refresh_token: 'refresh_tokens', blacklisted_token: 'blacklisted_tokens'
  has_secure_password

  # associations
  has_many :refresh_tokens, dependent: :delete_all
  has_many :blacklisted_tokens, dependent: :delete_all
  has_many :user_tracks, dependent: :destroy
  has_many :clients
  has_one :personal_record
  belongs_to :rol
  
  # enums
  enum status: [:active, :inactive, :banned]

  # methods
  def set_default_status
    self.status ||= :active
  end

end
