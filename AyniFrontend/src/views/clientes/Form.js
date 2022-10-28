import React from "react"
import {
  CCol,
  CForm,
  CFormInput,
  CRow
} from '@coreui/react-pro'

const Modal = (props) => {

  const {validated} = props
  const {formRef} = props

  return (
    <>
  
      <CForm className="row g-3 needs-validation"
        noValidate
        validated={validated}
        ref={formRef}
      >
      <CRow>
        <CCol>
          <CFormInput
            type="text"
            id="validationServer01"
            label="Tipo de Documento"
            feedbackInvalid="Porfavor ingrese ."
            required
          />
        </CCol>
        <CCol>
          <CFormInput
            type="text"
            id="validationServer01"
            label="Nº de Documento"
            feedbackInvalid="Porfavor ingrese un nombre de Banco."
            required
          />
        </CCol>
        <CCol>
          <CFormInput
            type="text"
            id="validationServer01"
            label="Nombre y Apellido"
            feedbackInvalid="Porfavor ingrese un nombre de Banco."
            required
          />
        </CCol>
      </CRow>
      <CRow>
        <CCol>
          <CFormInput
            type="text"
            id="validationServer02"
            label="Pais"
            feedbackInvalid="Porfavor ingrese una abreviatura de Banco (unico)."
            required
          />
        </CCol>
        <CCol>
          <CFormInput
            type="text"
            id="validationServer01"
            label="Código de País"
            feedbackInvalid="Porfavor ingrese un nombre de Banco."
            required
          />
        </CCol>

        <CCol>
          <CFormInput
            type="text"
            id="validationServer02"
            label="Dirección"
            feedbackInvalid="Porfavor ingrese una abreviatura de Banco (unico)."
            required
          />
        </CCol>
      </CRow>
      <CRow>
      <CCol>
        <CFormInput
            type="text"
            id="validationServer02"
            label="Usuario"
            feedbackInvalid="Porfavor ingrese una abreviatura de Banco (unico)."
            required
          />
        </CCol>  
      <CCol>
        <CFormInput
            type="text"
            id="validationServer02"
            label="Tipo de pago"
            feedbackInvalid="Porfavor ingrese una abreviatura de Banco (unico)."
            required
          />
        </CCol>
      </CRow>
      </CForm>

    </>
  )
}

export default Modal