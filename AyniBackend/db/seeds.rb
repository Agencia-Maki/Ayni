
# Area.create([{ name: "SysAdmin", slug: "SYS"}, { name: "Administración", slug: "ADM"}, { name: "Ventas", slug: "VTS"}, { name: "Producción", slug: "PDN" }])
# Rol.create(name: "ROOT", slug: "root", area_id: 1)

# Bank.create(name: "Banco de Crédito del Perú", slug: "BCP")

# PersonalRecord.create(
#   mother_last_name: "root",
#   father_last_name: "root",
#   first_name: "root",
#   nationality: "Peruana",
#   date_of_birth: "2022-10-25",
#   document_number: "root",
#   place_of_birth: "Arequipa",
#   age: "25",
#   full_address: "Arequipa",
#   province: "Arequipa",
#   department: "Arequipa",
#   bank_account_number: "root",
#   civil_status: "Soltero",
#   first_phone_number: "root",
#   second_phone_number: "root",
#   personal_email: "root@agenciamaki.com",
#   gender: "male",
#   pension_system: "unregistered",
#   pension_system_type: "NR",
#   receipt_of_honorarium: "no",
#   document_type: "DNI",
#   status: "activo",
#   bank_id: 1
# )

# User.create(
#   full_name: "root",
#   document_number: "root",
#   status: "active",
#   personal_record_id: 2,
#   rol_id: 1,
#   password: "password",
#   password_confirmation: "password"
# )