import React from "react"
import {
  CCol,
  CForm,
  CFormInput
} from '@coreui/react-pro'

const Modal = (props) => {

  const {validated} = props
  const {formRef} = props

  return (
    <>
      <h1>Crear Nuevo Banco</h1>

      <CForm className="row g-3 needs-validation"
        noValidate
        validated={validated}
        ref={formRef}
      >
        <CCol>
          <CFormInput
            type="text"
            id="validationServer01"
            label="Nombre del Banco"
            feedbackInvalid="Porfavor ingrese un nombre de Banco."
            required
          />
        </CCol>
        <CCol>
          <CFormInput
            type="text"
            id="validationServer02"
            label="Abreviatura"
            feedbackInvalid="Porfavor ingrese una abreviatura de Banco (unico)."
            required
          />
        </CCol>
      </CForm>

    </>
  )
}

export default Modal