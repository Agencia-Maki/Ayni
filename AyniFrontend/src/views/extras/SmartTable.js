import React from 'react'
import { CButton, CSmartTable } from '@coreui/react-pro'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
  faTrash,
  faPencil
} from '@fortawesome/free-solid-svg-icons'

// import data from './_data.js'

const SmartTable = (props) => {
  // destructuring props
  const { headerColums, data } = props

  return (
    <CSmartTable
      sorterValue={{ column: 'name', state: 'asc' }}
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
              <CButton size={'sm'} className='me-2'>
                <FontAwesomeIcon icon={faPencil} inverse />
              </CButton>

              <CButton size={'sm'} color={'danger'}>
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