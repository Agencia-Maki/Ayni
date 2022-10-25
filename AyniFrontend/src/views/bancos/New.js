import React, {useState} from "react"
import {
  CButton,
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter,
  CCol,
  CForm,
  CFormInput
} from '@coreui/react-pro'

const Modal = (props) => {

  const [validated, setValidated] = useState(false)
  const handleSubmit = (event) => {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }
    setValidated(true)
  }

  const {visible, setVisible} = props
  return (
    <>
      <CModal visible={visible} alignment="center" onClose={() => setVisible(false)}>
        <CModalHeader>
          <CModalTitle>Crear Nuevo Banco</CModalTitle>
        </CModalHeader>
        <CModalBody>

          <CForm className="row g-3 needs-validation"
            noValidate
            validated={validated}
            onSubmit={handleSubmit}
          >
            <CCol md={4}>
              <CFormInput
                type="text"
                id="validationServer01"
                label="Nombre del Banco"
                feedback="Looks good!"
                required
              />
            </CCol>
            <CCol md={4}>
              <CFormInput
                type="text"
                id="validationServer02"
                label="Abreviatura"
                feedback="Looks good!"
                required
              />
            </CCol>
            <CCol md={4}>
              <CFormInput
                type="text"
                id="validationServer03"
                label="# de trabajadores"
                feedback="Please provide a valid city."
                required
              />
            </CCol>

          <CButton color="primary" type="submit">
            Crear Banco
          </CButton>
          </CForm>

        </CModalBody>
        <CModalFooter>
          <CButton color="secondary" onClick={() => setVisible(false)}>
            Cerrar
          </CButton>
        </CModalFooter>
      </CModal>
    </>
  )
}

export default Modal