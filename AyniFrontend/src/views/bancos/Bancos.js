import React, { useState, useRef, useEffect } from 'react'
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

const initialData = {
  id: 0,
  name: "",
  slug: "",
  total_users: ""
}

const Bancos = () => {
  const [visible, setVisible] = useState(false)
  const [banks, setBanks] = useState([])
  const [typeForm, setTypeForm] = useState("")

  const { handleChange, data: currentBank, resetData: resetForm, setData: setCurrentBank } = useChange(initialData)

  const { getModel: getBanksList, 
          insertModel: insertBank, 
          updateModel: updateBank,
          deleteModel: deleteBank } = useCrud('/api/v1/banks')
  
  const [validated, setValidated] = useState(false)
  const formRef = useRef(null)

  const showModalNewBank = () => {
    setTypeForm("create")
    setVisible(true)
  }

  const showModalEditBank = (bank) => {
    setCurrentBank(bank)
    setTypeForm("update")
    setVisible(true)
  }

  const handleInsertBank = async (event) => {
    const form = formRef.current
    if (form.checkValidity() === false) {
      event.stopPropagation()
    } else {
      await insertBank(currentBank)
      resetForm()
      setVisible(false)
      loadBanks()
    }
    setValidated(true)
  }

  const handleUpdateBank = async (event) => {
    const form = formRef.current
    if (form.checkValidity() === false) {
      event.stopPropagation()
    } else {
      await updateBank(currentBank, `/api/v1/banks/${currentBank.id}`)
      resetForm()
      setVisible(false)
      loadBanks()
    }
    setValidated(true)
  }

  const handleDeleteBank = async (bank) => {
    // console.log(bank)
    await deleteBank(`/api/v1/banks/${bank.id}`)
    loadBanks()
  }

  const loadBanks = async () => {
    const response = await getBanksList()
    setBanks(response.banks)
  }

  const setTitleForm = () => {
    if (typeForm === "create") {
      return "Registrar Banco"
    } else {
      return "Actualizar Banco"
    }
  }

  const closeModal = () => {
    setVisible(false)
    resetForm()
  }

  useEffect(() => {
    loadBanks()
  }, [])

  return (
    <>
      <CRow>
        <CCol xs={12}>
          <CCard className="mb-4 border border-primary">
            <CCardHeader>
              <small>Panel de administración de </small> <strong>Bancos</strong>
            </CCardHeader>
            <CCardBody>
              <CButton color="success" className="float-end" onClick={() => showModalNewBank()}>
                Registrar Nuevo Banco
              </CButton>
              {
                banks.length > 0 ?
                  <SmartTable
                    data={banks}
                    headerColums={headerColums}                    
                    showModalEditBank={showModalEditBank}
                    typeForm={typeForm}
                    handleDeleteBank={handleDeleteBank}
                  /> : null
              }
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
      <ModalForm
        Form={Form}
        Title={setTitleForm()}
        visible={visible}
        setVisible={setVisible}
        formRef={formRef}
        validated={validated}
        setValidated={setValidated}
        handleInsertBank={handleInsertBank}
        handleChange={handleChange}
        currentBank={currentBank}
        typeForm={typeForm}
        closeModal={closeModal}
        handleUpdateBank={handleUpdateBank}
      />
    </>
  )
}

export default Bancos