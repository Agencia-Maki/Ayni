import React, { useState, useRef } from "react"
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
  const formRef = useRef(null)

  const handleSubmit = (event) => {
    const form = formRef.current
    if (form.checkValidity() === false) {
      event.stopPropagation()
    } else {
      alert("se ha validado y se esta enviando")
      // aqui poner el usecrud para crear el banco
    }
    setValidated(true)
  }

  const { visible, setVisible } = props
  return (
    <>
      <CModal size="xl" visible={visible} alignment="center" onClose={() => setVisible(false)}>
        <CModalHeader>
          <CModalTitle>Crear Nuevo Banco</CModalTitle>
        </CModalHeader>
        <CModalBody>

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

        </CModalBody>
        <CModalFooter>
          <CButton color="success" onClick={(e) => handleSubmit(e)}>
            Crear
          </CButton>
          <CButton color="secondary" onClick={() => setVisible(false)}>
            Cerrar
          </CButton>
        </CModalFooter>
      </CModal>
    </>
  )
}

export default Modal