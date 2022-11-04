import React from "react"
import {
  CCol,
  CForm,
  CFormInput
} from '@coreui/react-pro'

const Modal = (props) => {
  const {validated, handleChange, currentBank} = props
  const {formRef} = props

  return (
    <>
      <CForm className="row g-3 needs-validation"
        noValidate
        validated={validated}
        ref={formRef}
      >
        <CCol>
          <CFormInput
            value={currentBank.name}
            name="name"
            onChange={handleChange}
            type="text"
            id="validationServer01"
            label="Nombre del Banco"
            feedbackInvalid="Porfavor ingrese un nombre de Banco."
            required
          />
        </CCol>
        <CCol>
          <CFormInput
            value={currentBank.slug}
            name="slug"
            onChange={handleChange}
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