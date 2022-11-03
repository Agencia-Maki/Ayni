import React, { useContext } from 'react'
import {
  CAvatar,
  CBadge,
  CDropdown,
  CDropdownDivider,
  CDropdownHeader,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from '@coreui/react-pro'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBullhorn,
  faIdBadge,
  faListCheck,
  faMessage,
  faRightFromBracket,
  faUserPen,
} from '@fortawesome/free-solid-svg-icons'

import { AuthContext } from 'src/context/AuthContext'

import avatarFemale from './../../assets/images/avatars/female_avatar.png'
import avatarMale from './../../assets/images/avatars/male_avatar.png'
import avatarOther from './../../assets/images/avatars/other_avatar.png'

const AppHeaderDropdown = (props) => {
  const { currentUser } = props
  const { logout: LogoutUser } = useContext(AuthContext)
  const closeSession = () => {
    LogoutUser()
  }

  const setAvatar = () => {
    if (currentUser.avatar) {
      return currentUser.avatar.url
    }else {
      if (currentUser.gender === "male") {
        return avatarMale
      } else if (currentUser.gender === "female") {
        return avatarFemale
      } else {
        return avatarOther
      }
    }
  }

  return (
    <CDropdown variant="nav-item" alignment="end">
      <CDropdownToggle placement="bottom-end" className="py-0" caret={false}>
        <CAvatar src={setAvatar()} size="md" status="success" />
      </CDropdownToggle>
      <CDropdownMenu className="pt-0">
        <CDropdownHeader className="bg-light dark:bg-white dark:bg-opacity-10 fw-semibold py-2">
          General
        </CDropdownHeader>
        <CDropdownItem href="#">
          <FontAwesomeIcon icon={faBullhorn} className="me-3" />
          Anuncios
          <CBadge color="info-gradient" className="ms-2">
            8
          </CBadge>
        </CDropdownItem>
        <CDropdownItem href="#">
          <FontAwesomeIcon icon={faMessage} className="me-3" />
          Mensajes
          <CBadge color="success-gradient" className="ms-2">
            42
          </CBadge>
        </CDropdownItem>
        <CDropdownItem href="#">
          <FontAwesomeIcon icon={faListCheck} className="me-3" />
          Pendientes
          <CBadge color="danger-gradient" className="ms-2">
            3
          </CBadge>
        </CDropdownItem>
        <CDropdownHeader className="bg-light dark:bg-white dark:bg-opacity-10 fw-semibold py-2">
          Mis Datos Personales
        </CDropdownHeader>
        <CDropdownItem href="#">
          <FontAwesomeIcon icon={faIdBadge} className="me-3" />
          Mis Datos
        </CDropdownItem>
        <CDropdownItem href="/ficha/editar">
          <FontAwesomeIcon icon={faUserPen} className="me-2" />
          Actualizar Datos
        </CDropdownItem>
        <CDropdownDivider />
        <CDropdownItem onClick={()=>closeSession()} style={{ cursor: "pointer" }}>
          <FontAwesomeIcon icon={faRightFromBracket} className="me-3" />
          Cerrar Sesión
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  )
}

export default AppHeaderDropdown
