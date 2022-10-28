import React from "react"
import {
  CCol,
  CForm,
  CFormInput,
  CRow,
  CFormLabel,
  CFormSelect
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
        <CCol xs={3}>
          <CFormLabel>Tipo de Documento</CFormLabel>
          <CFormSelect size="md" className="mb-1" aria-label="Small select example" name="status">
            <option value="">Tipo de Documento</option>
            <option value="  ">DNI</option>
            <option value="  ">Carnet de extrangeria</option>
            <option value="  ">Pasaporte</option>
          </CFormSelect>
        </CCol>
        <CCol xs={2}>
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