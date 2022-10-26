import React, {useState} from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
} from '@coreui/react-pro'

import SmartTable from '../extras/SmartTable'
// import New from "./New"
import data_ from './data'

const Clientes = () => {

  const [visible, setVisible] = useState(false)
  const data = data_

  const fun = () => {
    console.log("XD")
    setVisible(true)
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
              data={data}
              headerColums={headerColums}
            />
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
    {/* <New
      visible={visible}
      setVisible={setVisible}
    /> */}
    </>
  )
}

export default Clientes