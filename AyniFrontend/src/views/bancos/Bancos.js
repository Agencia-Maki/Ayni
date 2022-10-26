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
import data_ from './data'
import New from "./New"

const Bancos = () => {

  const [visible, setVisible] = useState(false)
  const data = data_

  const fun = () => {
    console.log("XD")
    setVisible(true)
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
      filter: false,
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


  return (
    <>
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4 border border-primary">
          <CCardHeader>
            <small>Panel de administración de </small> <strong>Bancos</strong> 
          </CCardHeader>
          <CCardBody>
            <CButton color="success" className="float-end" onClick={ () => fun() }>
              Crear Banco
            </CButton>
            <SmartTable 
              data={data}
              headerColums={headerColums}
            />
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
    <New
      visible={visible}
      setVisible={setVisible}
    />
    </>
  )
}

export default Bancos