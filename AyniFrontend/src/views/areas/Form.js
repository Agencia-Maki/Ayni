import React from "react"
import {
  CRow,
  CCol,
  CForm,
  CFormInput,
  CFormSelect,
} from '@coreui/react-pro'

const Modal = (props) => {

  const {validated, handleChange, currentData} = props
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
            value={currentData.name}
            name='name'
            type="text"
            onChange={handleChange}
            id="validationServer01"
            label="Nombres"
            feedbackInvalid="Selecione un rango de horas."
            required
          />
        </CCol>
        <CCol>
          <CFormInput
            value={currentData.slug}  
            type="text"
            name='slug'
            onChange={handleChange}
            id="validationServer02"
            label="Slug"
            feedbackInvalid="Selecione un rango de horas."
            required
          />
        </CCol>
      </CRow>
      </CForm>

    </>
  )
}

export default Modal