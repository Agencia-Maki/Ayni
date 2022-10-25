import React, { useState } from 'react'
import { CBadge, CButton, CCardBody, CCollapse, CSmartTable } from '@coreui/react-pro'

import data from './_data.js'

const SmartTable = (props) => {
  // destructuring props
  const { headerColums } = props


  const [details, setDetails] = useState([])

  const getBadge = (status) => {
    switch (status) {
      case 'Active':
        return 'success'
      case 'Inactive':
        return 'secondary'
      case 'Pending':
        return 'warning'
      case 'Banned':
        return 'danger'
      default:
        return 'primary'
    }
  }
  const toggleDetails = (index) => {
    const position = details.indexOf(index)
    let newDetails = details.slice()
    if (position !== -1) {
      newDetails.splice(position, 1)
    } else {
      newDetails = [...details, index]
    }
    setDetails(newDetails)
  }

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
        status: (item) => (
          <td>
            <CBadge color={getBadge(item.status)}>{item.status}</CBadge>
          </td>
        ),
        show_details: (item) => {
          return (
            <td className="py-2">
              <CButton
                color="primary"
                variant="outline"
                shape="square"
                size="sm"
                onClick={() => {
                  toggleDetails(item.id)
                }}
              >
                {details.includes(item.id) ? 'Hide' : 'Show'}
              </CButton>
            </td>
          )
        },
        details: (item) => {
          return (
            <CCollapse visible={details.includes(item.id)}>
              <CCardBody>
                <h4>{item.username}</h4>
                <p className="text-muted">User since: {item.registered}</p>
                <CButton size="sm" color="info">
                  User Settings
                </CButton>
                <CButton size="sm" color="danger" className="ml-1">
                  Delete
                </CButton>
              </CCardBody>
            </CCollapse>
          )
        },
      }}
    />
  )
}

export default SmartTable