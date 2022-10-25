import React, { useState , useEffect } from "react"
import { 
  CSmartTable,
  CBadge,
  CButton,
  CCollapse,
  CCardBody,
  CCard,
  CCardText,
  CCardHeader,
  CCardTitle,
  CCardFooter
} from '@coreui/react-pro'


const columns = [
  {
    key: 'name',
    _style: { width: '40%' },
  },
  'registered',
  { key: 'role', filter: false, sorter: false, _style: { width: '20%' } },
  { key: 'status', _style: { width: '20%' } },
  {
    key: 'show_details',
    label: '',
    _style: { width: '1%' },
    filter: false,
    sorter: false,
  },
]
const usersData = [
  { id: 0, name: 'John Doe', registered: '2022/01/01', role: 'Guest', status: 'Pending' },
  {
    id: 1,
    name: 'Samppa Nori',
    registered: '2022/01/01',
    role: 'Member',
    status: 'Active',
  },
  {
    id: 2,
    name: 'Estavan Lykos',
    registered: '2022/02/07',
    role: 'Staff',
    status: 'Banned',
  },
  { id: 3, name: 'Chetan Mohamed', registered: '2022/02/07', role: 'Admin', status: 'Inactive' },
  {
    id: 4,
    name: 'Derick Maximinus',
    registered: '2022/03/19',
    role: 'Member',
    status: 'Pending',
  },
  { id: 5, name: 'Friderik Dávid', registered: '2022/01/21', role: 'Staff', status: 'Active' },
  { id: 6, name: 'Yiorgos Avraamu', registered: '2022/01/01', role: 'Member', status: 'Active' },
  {
    id: 7,
    name: 'Avram Tarasios',
    registered: '2022/02/07',
    role: 'Staff',
    status: 'Banned',
  },
  { id: 8, name: 'Quintin Ed', registered: '2022/02/07', role: 'Admin', status: 'Inactive' },
  { id: 9, name: 'Enéas Kwadwo', registered: '2022/03/19', role: 'Member', status: 'Pending' },
  { id: 10, name: 'Agapetus Tadeáš', registered: '2022/01/21', role: 'Staff', status: 'Active' },
  { id: 11, name: 'Carwyn Fachtna', registered: '2022/01/01', role: 'Member', status: 'Active' },
  { id: 12, name: 'Nehemiah Tatius', registered: '2022/02/07', role: 'Staff', status: 'Banned' },
  { id: 13, name: 'Ebbe Gemariah', registered: '2022/02/07', role: 'Admin', status: 'Inactive' },
  {
    id: 14,
    name: 'Eustorgios Amulius',
    registered: '2022/03/19',
    role: 'Member',
    status: 'Pending',
  },
  { id: 15, name: 'Leopold Gáspár', registered: '2022/01/21', role: 'Staff', status: 'Active' },
  { id: 16, name: 'Pompeius René', registered: '2022/01/01', role: 'Member', status: 'Active' },
  { id: 17, name: 'Paĉjo Jadon', registered: '2022/02/07', role: 'Staff', status: 'Banned' },
  {
    id: 18,
    name: 'Micheal Mercurius',
    registered: '2022/02/07',
    role: 'Admin',
    status: 'Inactive',
  },
  {
    id: 19,
    name: 'Ganesha Dubhghall',
    registered: '2022/03/19',
    role: 'Member',
    status: 'Pending',
  },
  { id: 20, name: 'Hiroto Šimun', registered: '2022/01/21', role: 'Staff', status: 'Active' },
  { id: 21, name: 'Vishnu Serghei', registered: '2022/01/01', role: 'Member', status: 'Active' },
  { id: 22, name: 'Zbyněk Phoibos', registered: '2022/02/07', role: 'Staff', status: 'Banned' },
  { id: 23, name: 'Aulus Agmundr', registered: '2022/01/01', role: 'Member', status: 'Pending' },
  {
    id: 42,
    name: 'Ford Prefect',
    registered: '2001/05/25',
    role: 'Alien',
    status: "Don't panic!",
  },
]
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

const Table = () => {

  const [details, setDetails] = useState([])

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
    <>
      <CCard
        className={"border border-primary"}
        // className={`mb-3 border-primary`}
        // style={{ "border-radius: 18rem" }}
      >
        <CCardBody>
          <CCardHeader style={{backgroundColor: "#3399ff"}} >
            <CCardTitle>Listado de clientes</CCardTitle>
            {/* <CButton className="text-end" style={{width: '18rem'}} > Editar Cotización </CButton> */}
          </CCardHeader>
        
          <CCardText >
            <CButton className="float-end">Nueva Cotización</CButton>
            <CButton className="float-end">Editar Cotización</CButton>
            <CSmartTable
                tableFilter
                cleaner
                clickableRows
                columns={columns}
                columnFilter
                columnSorter
                footer
                items={usersData}
                itemsPerPageSelect
                itemsPerPage={5}
                pagination
                sorterValue={{ column: 'name', state: 'asc' }}
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
                            toggleDetails(item._id)
                          }}
                        >
                          {details.includes(item._id) ? 'Hide' : 'Show'}
                        </CButton>
                      </td>
                    )
                  },
                  details: (item) => {
                    return (
                      <CCollapse visible={details.includes(item._id)}>
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
                
                // tableHeadProps={{
                //   color: 'danger',
                // }}
                // tableProps={{
                //   striped: true,
                //   hover: true,
                // }}
              />
            </CCardText>
          </CCardBody>

        <CCardFooter className="text-end">
          <CButton href="#">Go Dashboard</CButton>
        </CCardFooter>
      </CCard>
    </>
  )
}

export default Table



