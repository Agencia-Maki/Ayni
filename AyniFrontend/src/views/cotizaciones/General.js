import React, { useState, useRef } from "react"
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow
} from '@coreui/react-pro'

import SmartTable from '../extras/SmartTable'
import data_ from './data'

import Card from "../extras/Card"
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

  const headerColums = [
    {
      key: 'name',
      label: 'Nombre de Banco',
    },
    {
      key: 'slug',
      label: 'Abreviatura',
    },
    {
      key: 'total_users',
      label: '# de trabajadores',
      sorter: false,
    },
    {
      key: 'action',
      label: 'Acciones',
      // _style: { width: '1%' },
      filter: false,
      sorter: false,
    },
  ]

  function Title() {
    return "Crear Pendientes";
  }

  return (
    <>
    <CRow>
      <CCol xs={12}>
          <CCard className="mb-4 border border-primary">
          <CCardHeader>
            <small>Panel de administración de </small> <strong>pendientes</strong> 
          </CCardHeader>
          <CCardBody>
            <CButton color="success" className="float-end" onClick={ () => fun() }>
              Crear Pendiente
            </CButton>
            <SmartTable 
              data={data_}
              headerColums={headerColums}
            />
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>

      <CButton color="success" className="float-end" onClick={ () => fun() }>
        Prueba
      </CButton>
      <Card
        Form={Form} //formulario 
        Title={Title}
        visible={visible}
        setVisible={setVisible}
        formRef={formRef}
        validated={validated}
        setValidated={setValidated}
        handleSubmit={handleSubmit}
      />
    </>
  )
}

export default Table