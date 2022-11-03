import React from 'react'
import {
  CBadge,
  CDropdown,
  CDropdownHeader,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CProgress,
} from '@coreui/react-pro'
import CIcon from '@coreui/icons-react'
import {
  cilBasket,
  cilBell,
  cilChartPie,
  cilSpeedometer,
  cilUserFollow,
  cilUserUnfollow,
} from '@coreui/icons'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBullhorn,
  faCodeCompare,
  faFileCircleCheck,
  faFileCircleXmark,
  faIdBadge,
  faListCheck,
  faMessage,
  faPersonCircleCheck,
  faPersonCircleXmark,
  faRightFromBracket,
  faUserPen,
} from '@fortawesome/free-solid-svg-icons'

const AppHeaderDropdownNotif = () => {
  const itemsCount = 5
  return (
    <CDropdown variant="nav-item" alignment="end">
      <CDropdownToggle caret={false}>
        <span className="d-inline-block my-1 mx-2 position-relative">
          <CIcon icon={cilBell} size="lg" />
          <CBadge color="danger" position="top-end" className="p-1">
            <span>{itemsCount}</span>
          </CBadge>
        </span>
      </CDropdownToggle>
      <CDropdownMenu className="pt-0">
        <CDropdownHeader className="bg-light dark:bg-white dark:bg-opacity-10">
          <strong>Tienes {itemsCount} notificaciones</strong>
        </CDropdownHeader>
        <CDropdownItem>
          <FontAwesomeIcon icon={faFileCircleCheck} className="me-2 text-success" /> Cotización Aprobada
        </CDropdownItem>
        <CDropdownItem>
          <FontAwesomeIcon icon={faFileCircleXmark} className="me-2 text-danger" /> Cotización Desaprobada
        </CDropdownItem>
        <CDropdownItem>
          <FontAwesomeIcon icon={faPersonCircleCheck} className="me-2 text-success" /> Cliente Aprobado
        </CDropdownItem>
        <CDropdownItem>
          <FontAwesomeIcon icon={faPersonCircleXmark} className="me-2 text-danger" /> Cliente Desaprobado
        </CDropdownItem>
        <CDropdownItem>
          <FontAwesomeIcon icon={faCodeCompare} className="me-2 text-warning" /> Pendiente actualizado
        </CDropdownItem>
        <CDropdownItem>
         <FontAwesomeIcon icon={faBullhorn} className="me-2 text-info" /> Nuevo Anuncio
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  )
}

export default AppHeaderDropdownNotif
