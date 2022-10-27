import React, { useState, useRef } from "react"
import {
  CButton,
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter
} from '@coreui/react-pro'

const Card = (props) => {

  const [validated, setValidated] = useState(false)
  const formRef = useRef(null)
  const { visible, setVisible } = props

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

  return (
    <>
      <CModal size="xl" visible={visible} alignment="center" onClose={() => setVisible(false)}>
        <CModalHeader>
          <CModalTitle>Card [Estas en card]</CModalTitle>
        </CModalHeader>
        <CModalBody>

          <props.Form
            handleSubmit={handleSubmit}
          />

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

export default Card