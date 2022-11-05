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
    label: 'Nombre',
  },
  {
    key: 'description',
    label: 'Descripción',
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
  description: ""
}

const FormasPago = () => {
  const [visible, setVisible] = useState(false)
  const [formPayments, setFormPayments] = useState([])
  const [typeForm, setTypeForm] = useState("")

  const { handleChange, data: currentFormPayment, resetData: resetForm, setData: setCurrentFormPayment } = useChange(initialData)

  const { getModel: getFormsPaymentList, 
          insertModel: insertFormsPayment, 
          updateModel: updateFormsPayment,
          deleteModel: deleteFormsPayment } = useCrud('/api/v1/customer_payment_types')
  
  const [validated, setValidated] = useState(false)
  const formRef = useRef(null)

  const showModalNewBank = () => {
    setTypeForm("create")
    setVisible(true)
  }

  const showModalEditBank = (bank) => {
    setCurrentFormPayment(bank)
    setTypeForm("update")
    setVisible(true)
  }

  const handleInsertFormPayment = async (event) => {
    const form = formRef.current
    if (form.checkValidity() === false) {
      event.stopPropagation()
    } else {
      await insertFormsPayment(currentFormPayment)
      resetForm()
      setVisible(false)
      loadBanks()
    }
    setValidated(true)
  }

  // const handleUpdateBank = async (event) => {
  //   const form = formRef.current
  //   if (form.checkValidity() === false) {
  //     event.stopPropagation()
  //   } else {
  //     await updateBank(currentFormPayment, `/api/v1/banks/${currentFormPayment.id}`)
  //     resetForm()
  //     setVisible(false)
  //     loadBanks()
  //   }
  //   setValidated(true)
  // }

  // const handleDeleteBank = async (bank) => {
  //   // console.log(bank)
  //   await deleteBank(`/api/v1/banks/${bank.id}`)
  //   loadBanks()
  // }

  const loadBanks = async () => {
    const response = await getFormsPaymentList()
    setFormPayments(response.customer_payment_types)
  }

  const setTitleForm = () => {
    if (typeForm === "create") {
      return "Registrar Forma de Pago"
    } else {
      return "Actualizar Forma de Pago"
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
              <small>Panel de administración de </small> <strong>Formas de Pagos de los Clientes</strong>
            </CCardHeader>
            <CCardBody>
              <CButton color="success" className="float-end" onClick={() => showModalNewBank()}>
                Registrar Nueva Forma de Pago
              </CButton>
              {
                formPayments.length > 0 ?
                  <SmartTable
                    data={formPayments}
                    headerColums={headerColums}                    
                    showModalEditBank={showModalEditBank}
                    typeForm={typeForm}
                    // handleDeleteBank={handleDeleteBank}
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
        typeForm={typeForm}
        closeModal={closeModal}
        currentData={currentFormPayment}
        handleChange={handleChange}
        handleInsertData={handleInsertFormPayment}
        // 
        // 
        // handleUpdateBank={handleUpdateBank}
      />
    </>
  )
}

export default FormasPago