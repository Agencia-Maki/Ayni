import React, {useState, useRef} from 'react'
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

import Card from "../extras/ModalForm"
import Form from "./Form"

const Clientes = () => {

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
      key: 'document_type',
      label: 'Tipo de documento',
    },
    {
      key: 'document_number',
      label: 'Nº de documento',
    },
    {
      key: 'full_name',
      label: 'Nombres',
    },
    {
      key: 'full_address',
      label: 'Dirección',
    },
    {
      key: 'payment_type_name',
      label: 'Tipo de Pago',
    },
    {
      key: 'country',
      label: 'País',
    },
    {
      key: 'contry_code',
      label: 'Codigo de País',
    },
    {
      key: 'user',
      label: 'Usuario',
    },
  ]

  function Title() {
    return "Crear Nuevo Cliente";
  }

  return (
    <>
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4 border border-primary">
          <CCardHeader>
            <small>Panel de administración de </small> <strong>Clientes</strong> 
          </CCardHeader>
          <CCardBody>
            <CButton color="success" className="float-end" onClick={ () => fun() }>
              Crear Cliente
            </CButton>
            <SmartTable 
              data={data_}
              headerColums={headerColums}
            />
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
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

export default Clientes