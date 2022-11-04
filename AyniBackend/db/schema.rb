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

ActiveRecord::Schema[7.0].define(version: 2022_10_22_181333) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "areas", force: :cascade do |t|
    t.string "name"
    t.string "slug"
  end

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
    t.string "contract_start_date"
    t.string "contract_end_date"
    t.integer "contract_type"
    t.integer "contract_status"
    t.bigint "rol_id", null: false
    t.bigint "area_id", null: false
    t.bigint "personal_record_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["area_id"], name: "index_contracts_on_area_id"
    t.index ["personal_record_id"], name: "index_contracts_on_personal_record_id"
    t.index ["rol_id"], name: "index_contracts_on_rol_id"
  end

  create_table "customer_contacts", force: :cascade do |t|
    t.string "full_name"
    t.string "company_position"
    t.string "phone"
    t.string "whatsapp"
    t.string "email"
    t.bigint "customer_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["customer_id"], name: "index_customer_contacts_on_customer_id"
  end

  create_table "customer_payment_types", force: :cascade do |t|
    t.string "name"
    t.text "description"
  end

  create_table "customers", force: :cascade do |t|
    t.integer "document_type"
    t.string "full_name"
    t.string "full_address"
    t.string "contact_phone"
    t.string "payment_type_name"
    t.string "contry"
    t.string "contry_code"
    t.string "document_number"
    t.bigint "customer_payment_type_id", null: false
    t.bigint "user_id", null: false
    t.index ["customer_payment_type_id"], name: "index_customers_on_customer_payment_type_id"
    t.index ["user_id"], name: "index_customers_on_user_id"
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

  create_table "order_items", force: :cascade do |t|
    t.text "description"
    t.integer "quantity"
    t.decimal "amount"
    t.decimal "total_amount"
    t.bigint "order_id", null: false
    t.index ["order_id"], name: "index_order_items_on_order_id"
  end

  create_table "order_notes", force: :cascade do |t|
    t.text "description"
    t.bigint "order_id", null: false
    t.index ["order_id"], name: "index_order_notes_on_order_id"
  end

  create_table "orders", force: :cascade do |t|
    t.string "order_code"
    t.string "customer_name"
    t.decimal "amount_without_igv"
    t.decimal "total_amount"
    t.string "validity_date"
    t.date "delivery_at"
    t.string "reference_body"
    t.bigint "user_id", null: false
    t.bigint "customer_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["customer_id"], name: "index_orders_on_customer_id"
    t.index ["order_code"], name: "index_orders_on_order_code", unique: true
    t.index ["user_id"], name: "index_orders_on_user_id"
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
    t.string "bank_account_number"
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
    t.bigint "area_id", null: false
    t.index ["area_id"], name: "index_rols_on_area_id"
  end

  create_table "user_tracks", force: :cascade do |t|
    t.string "os_data"
    t.string "remote_ip"
    t.string "browser_data"
    t.string "aud"
    t.bigint "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_user_tracks_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "full_name", null: false
    t.string "document_number", null: false
    t.string "password_digest"
    t.integer "status"
    t.integer "gender"
    t.string "avatar"
    t.bigint "personal_record_id", null: false
    t.bigint "rol_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["document_number"], name: "index_users_on_document_number", unique: true
    t.index ["personal_record_id"], name: "index_users_on_personal_record_id"
    t.index ["rol_id"], name: "index_users_on_rol_id"
  end

  add_foreign_key "blacklisted_tokens", "users"
  add_foreign_key "contracts", "areas"
  add_foreign_key "contracts", "personal_records"
  add_foreign_key "contracts", "rols"
  add_foreign_key "customer_contacts", "customers"
  add_foreign_key "customers", "customer_payment_types"
  add_foreign_key "customers", "users"
  add_foreign_key "emergency_contacts", "personal_records"
  add_foreign_key "laboral_experiences", "personal_records"
  add_foreign_key "order_items", "orders"
  add_foreign_key "order_notes", "orders"
  add_foreign_key "orders", "customers"
  add_foreign_key "orders", "users"
  add_foreign_key "personal_records", "banks"
  add_foreign_key "refresh_tokens", "users"
  add_foreign_key "rols", "areas"
  add_foreign_key "user_tracks", "users"
  add_foreign_key "users", "personal_records"
  add_foreign_key "users", "rols"
end
