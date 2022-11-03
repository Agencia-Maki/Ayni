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

import Card from "../extras/Card"
import Form from "./Form"


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

  function Title() {
    return "Crear Nuevo Banco";
  }

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
              Nuevo Banco
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

export default Bancos