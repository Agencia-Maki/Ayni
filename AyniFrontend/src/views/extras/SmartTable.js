import React, { useState } from 'react'
import { CBadge, CButton, CCardBody, CCollapse, CSmartTable } from '@coreui/react-pro'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
  faTrash,
  faPencil
} from '@fortawesome/free-solid-svg-icons'

import data from './_data.js'

const SmartTable = (props) => {
  // destructuring props
  const { headerColums } = props


  const [details, setDetails] = useState([])

  // const toggleDetails = (index) => {
  //   const position = details.indexOf(index)
  //   let newDetails = details.slice()
  //   if (position !== -1) {
  //     newDetails.splice(position, 1)
  //   } else {
  //     newDetails = [...details, index]
  //   }
  //   setDetails(newDetails)
  // }

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
        
        // show_details: (item) => {
        //   return (
        //     <td className="py-2">
        //       <CButton
        //         color="primary"
        //         variant="outline"
        //         shape="square"
        //         size="sm"
        //         onClick={() => {
        //           toggleDetails(item.id)
        //         }}
        //       >
        //         {details.includes(item.id) ? 'Hide' : 'Show'}
        //       </CButton>
        //     </td>
        //   )
        // },
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