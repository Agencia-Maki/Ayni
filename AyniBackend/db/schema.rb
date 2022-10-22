# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2022_10_21_215202) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "banks", force: :cascade do |t|
    t.string "name"
    t.string "slug"
  end

  create_table "blacklisted_tokens", force: :cascade do |t|
    t.string "token"
    t.bigint "user_id", null: false
    t.datetime "expire_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_blacklisted_tokens_on_user_id"
  end

  create_table "contracts", force: :cascade do |t|
    t.string "contract_code"
    t.date "contract_start_date"
    t.string "contract_end_date"
    t.bigint "personal_record_id", null: false
    t.bigint "rol_id", null: false
    t.integer "contract_type"
    t.integer "contract_status"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["contract_code"], name: "index_contracts_on_contract_code", unique: true
    t.index ["personal_record_id"], name: "index_contracts_on_personal_record_id"
    t.index ["rol_id"], name: "index_contracts_on_rol_id"
  end

  create_table "emergency_contacts", force: :cascade do |t|
    t.string "last_name"
    t.string "first_name"
    t.string "phone_number"
    t.string "relationship"
    t.bigint "personal_record_id", null: false
    t.index ["personal_record_id"], name: "index_emergency_contacts_on_personal_record_id"
  end

  create_table "laboral_experiences", force: :cascade do |t|
    t.string "company_name"
    t.string "company_address"
    t.string "company_sector"
    t.string "company_position"
    t.string "company_start_date"
    t.string "company_end_date"
    t.string "company_reference_name"
    t.string "company_reference_phone_number"
    t.bigint "personal_record_id", null: false
    t.index ["personal_record_id"], name: "index_laboral_experiences_on_personal_record_id"
  end

  create_table "personal_records", force: :cascade do |t|
    t.string "mother_last_name"
    t.string "father_last_name"
    t.string "first_name"
    t.string "nationality"
    t.string "date_of_birth"
    t.string "document_number"
    t.string "place_of_birth"
    t.string "age"
    t.string "full_address"
    t.string "province"
    t.string "department"
    t.string "banck_account_number"
    t.string "civil_status"
    t.string "first_phone_number"
    t.string "second_phone_number"
    t.string "personal_email"
    t.integer "gender"
    t.integer "pension_system"
    t.integer "pension_system_type"
    t.integer "receipt_of_honorarium"
    t.integer "document_type"
    t.integer "status"
    t.bigint "bank_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["bank_id"], name: "index_personal_records_on_bank_id"
  end

  create_table "refresh_tokens", force: :cascade do |t|
    t.string "token"
    t.bigint "user_id", null: false
    t.datetime "expire_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["token"], name: "index_refresh_tokens_on_token", unique: true
    t.index ["user_id"], name: "index_refresh_tokens_on_user_id"
  end

  create_table "rols", force: :cascade do |t|
    t.string "name"
    t.string "slug"
  end

  create_table "user_tracks", force: :cascade do |t|
    t.string "os_data"
    t.string "remote_ip"
    t.string "browser_data"
    t.string "aud"
    t.bigint "user_id", null: false
    t.index ["user_id"], name: "index_user_tracks_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "full_name"
    t.string "document_number"
    t.string "password_digest"
    t.bigint "personal_record_id", null: false
    t.bigint "rol_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["document_number"], name: "index_users_on_document_number", unique: true
    t.index ["personal_record_id"], name: "index_users_on_personal_record_id"
    t.index ["rol_id"], name: "index_users_on_rol_id"
  end

  add_foreign_key "blacklisted_tokens", "users"
  add_foreign_key "contracts", "personal_records"
  add_foreign_key "contracts", "rols"
  add_foreign_key "emergency_contacts", "personal_records"
  add_foreign_key "laboral_experiences", "personal_records"
  add_foreign_key "personal_records", "banks"
  add_foreign_key "refresh_tokens", "users"
  add_foreign_key "user_tracks", "users"
  add_foreign_key "users", "personal_records"
  add_foreign_key "users", "rols"
end
