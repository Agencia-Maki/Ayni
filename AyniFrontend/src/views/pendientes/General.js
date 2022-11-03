import React from "react"
import { Link } from "react-router-dom";
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow
} from '@coreui/react-pro'
import SmartTable from "../extras/SmartTable"

import Data from "./Data"

const Table = () => {

  const headerColums = [
    {
      key: 'id',
      label: '#',
    },
    {
      key: 'name',
      label: 'Nombre',
    },
    {
      key: 'description',
      label: 'Descripción',
    },
    {
      key: 'start_hour',
      label: 'Hora de Inicio',
    },
    {
      key: 'end_hour',
      label: 'Hora de Fin',
    },
    {
      key: 'total_hour',
      label: 'Horas implentadas',
    },
    {
      key: 'state',
      label: 'Estado',
    },
  ]

  return (
    <>
      <CRow>
        <CCol xs={12}>
          <CCard className="mb-4 border border-primary">
            <CCardHeader>
              <small>Panel de administración de </small> <strong>Colaboradores</strong> 
            </CCardHeader>
            <CCardBody>
              <Link className="btn btn-sm btn-success float-end" to="/pendientes/general/gestionar">
                Gestionar Pendientes
              </Link>
              <SmartTable 
                data={Data}
                headerColums={headerColums}
              />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default Table