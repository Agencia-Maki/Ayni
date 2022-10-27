import React, { useState, useRef } from "react"
import {
  CCol,
  CForm,
  CFormInput,
  CButton
} from '@coreui/react-pro'


const Form = () => {

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

  return(
    <>
      <h1>Formulario Dinamico [Estas en Form]</h1>


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

      <CButton color="success" onClick={(e) => handleSubmit(e)}>
            Crear[Form]
      </CButton>

    </>
  )
}

export default Form

