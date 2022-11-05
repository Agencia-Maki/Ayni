import React from 'react'
import { CButton, CSmartTable } from '@coreui/react-pro'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
  faTrash,
  faPencil
} from '@fortawesome/free-solid-svg-icons'

import useConfirmation from 'src/hooks/useConfirmation'

// import data from './_data.js'

const confirmationData = {
  title: 'Esta seguro(a) eliminar este banco? 🫣',
  text: 'Esta acción hará que los trabajadores asociados a este banco se actualice a banco no asignados.',
  text_cancel: 'No se borró el registro del banco, sigue activo 🤗'
}

const SmartTable = (props) => {
  // destructuring props
  const { headerColums, data, showModalEditData, handleDeleteData } = props
  const { handleConfirmation } = useConfirmation()  

  return (
    <CSmartTable
      // sorterValue={{ column: 'name', state: 'asc' }}
      clickableRows={false}
      tableProps={{
        striped: true,
        hover: true,
      }}
      activePage={1}
      footer
      items={data}
      columns={headerColums}
      columnFilter
      tableFilter
      tableFilterLabel="Buscar:"
      tableFilterPlaceholder="Ingrese su búsqueda"
      cleaner
      itemsPerPage={15}
      columnSorter
      pagination
      paginationProps={{
        'size': 'sm',
        'bordered': 'true',
        'align': 'end'
      }}
      scopedColumns={{
        action: (item) => {
          return (
            <td>
              <CButton size={'sm'} className='me-2' onClick={() => showModalEditData(item)}>
                <FontAwesomeIcon icon={faPencil} inverse />
              </CButton>

              <CButton size={'sm'} color={'danger'} onClick={() => handleConfirmation(confirmationData.title, confirmationData.text , () => handleDeleteData(item) ,confirmationData.text_cancel)}>
                <FontAwesomeIcon icon={faTrash} inverse />
              </CButton>
            </td>
          )
        }
      }}
    />
  )
}

export default SmartTable