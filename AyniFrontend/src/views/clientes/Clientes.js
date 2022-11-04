import React, {useState, useEffect, useRef} from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow
} from '@coreui/react-pro'
import SmartTable from '../extras/SmartTable'

import useCrud from 'src/hooks/useCrud'
import useChange from 'src/hooks/useChange'
import ModalForm from "../extras/ModalForm"
import Form from "./Form"

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

const initialData = {
  id: 0,
  document_type: "",
  document_number: "",
  full_name: "",
  full_address: "",
  payment_type_name: "",
  country: "",
  country_code: "",
  user: ""
}

const Clientes = () => {

  const [visible, setVisible] = useState(false)
  const [clients, setClients] = useState([])
  const [typeForm, setTypeForm] = useState("")

  const { handleChange, data: currentClient, resetData: resetForm, setData: setCurrentClient } = useChange(initialData)  


  const { getModel: getClientList, 
          insertModel: insertClient, 
          updateModel: updateClient,
          deleteModel: deleteClient } = useCrud('/api/v1/customers')

  const [validated, setValidated] = useState(false)
  const formRef = useRef(null)

  const showModalNewClient = () => {
    setTypeForm("create")
    setVisible(true)
  }

  const showModalEditClient = (client) => {
    setCurrentClient(client)
    setTypeForm("update")
    setVisible(true)
  }

  const handleInsertClient = async (event) => {
    const form = formRef.current
    if (form.checkValidity() === false) {
      event.stopPropagation()
    } else {
      await insertClient(currentClient)
      resetForm()
      setVisible(false)
      loadClientes()
    }
    setValidated(true)
  }

  const handleUpdateClient = async (event) => {
    const form = formRef.current
    if (form.checkValidity() === false) {
      event.stopPropagation()
    } else {
      await updateClient(currentClient, `/api/v1/customers/${currentClient.id}`)
      resetForm()
      setVisible(false)
      loadClientes()
    }
    setValidated(true)
  }

  const handleDeleteClient = async (client) => {
    await deleteClient(`/api/v1/customers/${client.id}`)
    loadClientes()
  }

  const loadClientes = async () => {
    const response = await getClientList()
    setClients(response.customers)
  }

  const setTitleForm = () => {
    if (typeForm === "create") {
      return "Registrar Cliente"
    } else {
      return "Actualizar Cliente"
    }
  }
  
  const closeModal = () => {
    setVisible(false)
    resetForm()
  }

  useEffect(() => {
    loadClientes()
  }, [])


  return (
    <>
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4 border border-primary">
          <CCardHeader>
            <small>Panel de administración de </small> <strong>Clientes</strong> 
          </CCardHeader>
          <CCardBody>
            <CButton color="success" className="float-end" onClick={ () => showModalNewClient() }>
              Crear Cliente
            </CButton>
            {
              clients.length > 0 ? 
              <SmartTable 
                data={clients}
                headerColums={headerColums}
                showModalEditClient={showModalEditClient}
                typeForm={typeForm}
                handleDeleteClient={handleDeleteClient}
              /> : null
            }
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
    <ModalForm
        Form={Form} //formulario 
        Title={setTitleForm()}
        visible={visible}
        setVisible={setVisible}
        formRef={formRef}
        validated={validated}
        setValidated={setValidated}

        handleInsertBank={handleInsertClient}
        handleChange={handleChange}
        currentClient={currentClient}
        typeForm={typeForm}
        closeModal={closeModal}

        handleUpdateClient={handleUpdateClient}
      />
    </>
  )
}

export default Clientes