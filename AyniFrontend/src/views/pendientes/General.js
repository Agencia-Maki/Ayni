import React, { useState } from "react"
import {
  CButton,
} from '@coreui/react-pro'

import Card from "./Card"
import Form from "./Form"

const Table = () => {

  const [visible, setVisible] = useState(false)

  const fun = () => {
    console.log("XD")
    setVisible(true)
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
      />
      <h1>estas en cotizacion[!]</h1>

    </>
  )
}

export default Table