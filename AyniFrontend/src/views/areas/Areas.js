import React, {useState, useEffect, useRef} from "react"
import { Link } from "react-router-dom";
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow
} from '@coreui/react-pro'
import SmartTable from "../extras/SmartTable"

import useCrud from 'src/hooks/useCrud'
import useChange from 'src/hooks/useChange'
import ModalForm from "../extras/ModalForm"

// import Data from "./Data"
import Form from './Form'
// const Data = []

const headerColums = [
  {
    key: 'id',
    label: '#',
    filter: false,
    sorter: false
  },
  {
    key: 'name',
    label: 'Nombre',
  },
  {
    key: 'slug',
    label: 'Abreviatura'
  }
]

const initialData = {
  id: 0,
  name: "",
  slug: ""
}

const Table = () => {

  const [visible, setVisible] = useState(false)
  const [areas, setAreas] = useState([])
  const [typeForm, setTypeForm] = useState("")

  const [validated, setValidated] = useState(false)
  const formRef = useRef(null)

  const { handleChange, data: currentArea, resetData: resetForm, setData: setCurrentArea } = useChange(initialData)

  const { getModel: getAreasList, 
          insertModel: insertArea, 
          updateModel: updateArea,
          deleteModel: deleteArea } = useCrud('/api/v1/areas')


  const showModalNewArea = () => {
    setTypeForm("create")
    setVisible(true)
  }

  const showModalEditArea = (bank) => {
    setCurrentArea(areas)
    setTypeForm("update")
    setVisible(true)
  }

  const handleInsertArea = async (event) => {
    const form = formRef.current
    if (form.checkValidity() === false) {
      event.stopPropagation()
    } else {
      await insertArea(currentArea)
      resetForm()
      setVisible(false)
      loadAreas()
    }
    setValidated(true)
  }

  const handleUpdateArea = async (event) => {
    const form = formRef.current
    if (form.checkValidity() === false) {
      event.stopPropagation()
    } else {
      await updateArea(currentArea, `/api/v1/areas/${currentArea.id}`)
      resetForm()
      setVisible(false)
      loadAreas()
    }
    setValidated(true)
  }

  const handleDeleteArea = async (areas) => {
    // console.log(bank)
    await deleteArea(`/api/v1/areas/${areas.id}`)
    loadAreas()
  }

  const loadAreas = async () => {
    const response = await getAreasList()
    setAreas(response.areas)
  }

  const setTitleForm = () => {
    if (typeForm === "create") {
      return "Registrar Area"
    } else {
      return "Actualizar Area"
    }
  }

  const closeModal = () => {
    setVisible(false)
    resetForm()
  }

  useEffect(() => {
    loadAreas()
  }, [])


  return (
    <>
      <CRow>
        <CCol xs={12}>
          <CCard className="mb-4 border border-primary">
            <CCardHeader>
              <small>Panel de administración de </small> <strong>Areas - Puestos</strong> 
            </CCardHeader>
            <CCardBody>
              <Link className="btn btn-sm btn-success float-end" onClick={() => showModalNewArea()}>
                Crear Areas y Puestos
              </Link>
              {
                areas.length > 0 ?
                  <SmartTable
                    data={areas}
                    headerColums={headerColums}                    
                    showModalEditData={showModalEditArea}
                    typeForm={typeForm}
                    handleDeleteData={handleDeleteArea}
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
        handleInsertData={handleInsertArea}
        handleChange={handleChange}
        currentData={currentArea}
        typeForm={typeForm}
        closeModal={closeModal}
        handleUpdateData={handleUpdateArea}
      />
    </>
  )
}

export default Table