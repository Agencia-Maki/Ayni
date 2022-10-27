import React, { useState, useRef } from "react"
import {
  CButton,
} from '@coreui/react-pro'

import Card from "./Card"
import Form from "./Form"

const Table = () => {

  const [visible, setVisible] = useState(false)
  const [validated, setValidated] = useState(false)
  const formRef = useRef(null)

  const fun = () => {
    console.log("XD")
    setVisible(true)
  }

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

      <CButton color="success" className="float-end" onClick={ () => fun() }>
        Prueba
      </CButton>
      <Card
        Form={Form} //formulario 
        visible={visible}
        setVisible={setVisible}
        formRef={formRef}
        validated={validated}
        setValidated={setValidated}
        handleSubmit={handleSubmit}
      />
      <h1>estas en cotizacion[!]</h1>

    </>
  )
}

export default Table