CarrierWave.configure do |config|
  config.storage    = :aws
  config.aws_bucket = ENV["AWS_BUCKET_NAME"]
  config.aws_acl    = 'private'
  config.aws_authenticated_url_expiration = 60 * 60 * 24 * 2
  config.aws_attributes = -> { {
    expires: 1.week.from_now.httpdate,
    cache_control: 'max-age=604800'
  } }

  config.aws_credentials = {
    access_key_id:     ENV["AWS_BUCKET_KEY_ID"],
    secret_access_key: ENV["AWS_ACCESS_KEY"],
    region:            ENV["AWS_BUCKET_REGION"], # Required
    stub_responses:    Rails.env.test? # Optional, avoid hitting S3 actual during tests
  }
end