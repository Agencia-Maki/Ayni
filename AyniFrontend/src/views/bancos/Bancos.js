import React, { useState, useEffect } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
} from '@coreui/react-pro'

import SmartTable from '../extras/SmartTable'
import New from "./New"

import useCrud from 'src/hooks/useCrud'

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
    filter: false,
    sorter: false,
  },
]

const Bancos = () => {

  const [visible, setVisible] = useState(false)
  const [banks, setBanks] = useState([])

  const { getModel: getBanksList } = useCrud('/api/v1/banks')

  const fun = () => {
    console.log("XD")
    setVisible(true)
  }

  return (
    <>
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <small>Panel de administración de </small> <strong>Bancos</strong> 
          </CCardHeader>
          <CCardBody>
            <CButton color="success" className="float-end" onClick={ () => fun() }>
              Nuevo Banco
            </CButton>
            <SmartTable 
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