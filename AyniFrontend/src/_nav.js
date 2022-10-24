import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
  faGaugeHigh,
  faFileSignature,
  faUserAstronaut,
  faClipboardUser,
  faMeteor,
  faMedal,
  faUsersViewfinder,
  faUsersGear,
  faHandshake,
  faGhost,
  faListCheck,
  faClipboardList,
  faLaptopFile,
  faFileContract,
  faPeopleArrows,
  faPeopleGroup,
  faNetworkWired,
  faRocket
} from '@fortawesome/free-solid-svg-icons'

import CIcon from '@coreui/icons-react'
import {
  cilBell,
  cilCalculator,
  cilCalendar,
  cilDrop,
  cilEnvelopeOpen,
  cilLayers,
  cilNotes,
  cilPencil,
  cilSpeedometer,
  cilSpreadsheet,
  cilStar,
  cilPlus,
} from '@coreui/icons'
import { CNavGroup, CNavGroupItems, CNavItem, CNavTitle } from '@coreui/react-pro'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <FontAwesomeIcon icon={faGaugeHigh} inverse className="me-4 ms-1" size='lg' />,
    badge: {
      color: 'info-gradient',
      text: 'MAKI',
    },
  },
  {
    component: CNavTitle,
    name: 'Área de Ventas'
  },
  {
    component: CNavItem,
    name: 'Clientes',
    to: '/clientes',
    icon: <FontAwesomeIcon icon={faPeopleGroup} inverse className="me-3 ms-1" size='lg' />,
  },
  {
    component: CNavGroup,
    name: 'Cotizaciones',
    icon: <FontAwesomeIcon icon={faListCheck} inverse className="me-4 ms-1" size='lg' />,
    items: [
      {
        component: CNavItem,
        name: 'General',
        to: '/cotizaciones/general',
      },
      {
        component: CNavItem,
        name: 'Por ejecutivo',
        to: '/cotizaciones/ejecutivos',
      }
    ],
  },
  {
    component: CNavItem,
    name: 'Órdenes de Trabajo',
    to: '/ordenes-trabajo',
    icon: <FontAwesomeIcon icon={faLaptopFile} inverse className="me-3 ms-1" size='lg' />,
  },
  {
    component: CNavTitle,
    name: 'Área de Producción'
  },
  {
    component: CNavGroup,
    name: 'Pendientes',
    icon: <FontAwesomeIcon icon={faClipboardList} inverse className="me-4 ms-1" size='lg' />,
    items: [
      {
        component: CNavItem,
        name: 'General',
        to: '/cotizaciones/general',
      },
      {
        component: CNavItem,
        name: 'Por colaborador',
        to: '/cotizaciones/ejecutivos',
      }
    ],
  },
  {
    component: CNavItem,
    name: 'Órdenes de Trabajo',
    to: '/ordenes-trabajo',
    icon: <FontAwesomeIcon icon={faLaptopFile} inverse className="me-3 ms-1" size='lg' />,
  },
  {
    component: CNavTitle,
    name: 'Personal'
  },
  {
    component: CNavItem,
    name: 'Fichas del Personal',
    to: '/fichas',
    icon: <FontAwesomeIcon icon={faFileContract} inverse className="me-4 ms-1" size='lg' />,
  },
  {
    component: CNavItem,
    name: 'Contratos',
    to: '/contratos',
    icon: <FontAwesomeIcon icon={faHandshake} inverse className="me-3 ms-1" size='lg' />,
  },
  {
    component: CNavItem,
    name: 'Usuarios',
    to: '/usuarios',
    icon: <FontAwesomeIcon icon={faUsersGear} inverse className="me-3 ms-1" size='lg' />,
  },
  {
    component: CNavTitle,
    name: 'Configuracion del Sistema'
  },
  {
    component: CNavItem,
    name: 'Áreas',
    to: '/areas',
    icon: <FontAwesomeIcon icon={faNetworkWired} inverse className="me-3 ms-1" size='lg' />,
  },
  {
    component: CNavItem,
    name: 'Roles y Permisos',
    to: '/roles',
    icon: <FontAwesomeIcon icon={faRocket} inverse className="me-3 ms-1" size='lg' />,
  },
  {
    component: CNavTitle,
    name: 'Theme',
  },
  {
    component: CNavItem,
    name: 'Colors',
    to: '/theme/colors',
    icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Typography',
    to: '/theme/typography',
    icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'Components',
  },
  {
    component: CNavGroup,
    name: 'Forms',
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Form Control',
        to: '/forms/form-control',
      },
      {
        component: CNavItem,
        name: 'Select',
        to: '/forms/select',
      },
      {
        component: CNavItem,
        name: 'Multi Select',
        to: '/forms/multi-select',
        badge: {
          color: 'danger-gradient',
          text: 'PRO',
        },
      },
      {
        component: CNavItem,
        name: 'Checks & Radios',
        to: '/forms/checks-radios',
      },
      {
        component: CNavItem,
        name: 'Range',
        to: '/forms/range',
      },
      {
        component: CNavItem,
        name: 'Input Group',
        to: '/forms/input-group',
      },
      {
        component: CNavItem,
        name: 'Floating Labels',
        to: '/forms/floating-labels',
      },
      {
        component: CNavItem,
        name: 'Date Picker',
        to: '/forms/date-picker',
        badge: {
          color: 'danger-gradient',
          text: 'PRO',
        },
      },
      {
        component: CNavItem,
        name: 'Date Range Picker',
        to: '/forms/date-range-picker',
        badge: {
          color: 'danger-gradient',
          text: 'PRO',
        },
      },
      {
        component: CNavItem,
        name: 'Time Picker',
        to: '/forms/time-picker',
        badge: {
          color: 'danger-gradient',
          text: 'PRO',
        },
      },
      {
        component: CNavItem,
        name: 'Layout',
        to: '/forms/layout',
      },
      {
        component: CNavItem,
        name: 'Validation',
        to: '/forms/validation',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Icons',
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'CoreUI Free',
        to: '/icons/coreui-icons',
        badge: {
          color: 'success-gradient',
          text: 'FREE',
        },
      },
      {
        component: CNavItem,
        name: 'CoreUI Flags',
        to: '/icons/flags',
      },
      {
        component: CNavItem,
        name: 'CoreUI Brands',
        to: '/icons/brands',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Notifications',
    icon: <CIcon icon={cilBell} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Alerts',
        to: '/notifications/alerts',
      },
      {
        component: CNavItem,
        name: 'Badges',
        to: '/notifications/badges',
      },
      {
        component: CNavItem,
        name: 'Modal',
        to: '/notifications/modals',
      },
      {
        component: CNavItem,
        name: 'Toasts',
        to: '/notifications/toasts',
      },
    ],
  },
  {
    component: CNavItem,
    name: 'Widgets',
    to: '/widgets',
    icon: <CIcon icon={cilCalculator} customClassName="nav-icon" />,
    badge: {
      color: 'info-gradient',
      text: 'NEW',
    },
  },
  {
    component: CNavTitle,
    name: 'Plugins',
  },
  {
    component: CNavItem,
    name: 'Calendar',
    icon: <CIcon icon={cilCalendar} customClassName="nav-icon" />,
    badge: {
      color: 'danger-gradient',
      text: 'PRO',
    },
    to: '/plugins/calendar',
  },
  {
    component: CNavTitle,
    name: 'Extras',
  },
  {
    component: CNavGroup,
    name: 'Pages',
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Login',
        to: '/login',
      },
      {
        component: CNavItem,
        name: 'Register',
        to: '/register',
      },
      {
        component: CNavItem,
        name: 'Error 404',
        to: '/404',
      },
      {
        component: CNavItem,
        name: 'Error 500',
        to: '/500',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Apps',
    icon: <CIcon icon={cilLayers} customClassName="nav-icon" />,
    items: [
      {
        component: CNavGroup,
        name: 'Invoicing',
        icon: <CIcon icon={cilSpreadsheet} customClassName="nav-icon" />,
        to: '/apps/invoicing',
        items: [
          {
            component: CNavItem,
            name: 'Invoice',
            badge: {
              color: 'danger-gradient',
              text: 'PRO',
            },
            to: '/apps/invoicing/invoice',
          },
        ],
      },
      {
        component: CNavGroup,
        name: 'Email',
        to: '/apps/email',
        icon: <CIcon icon={cilEnvelopeOpen} customClassName="nav-icon" />,
        items: [
          {
            component: CNavItem,
            name: 'Inbox',
            badge: {
              color: 'danger-gradient',
              text: 'PRO',
            },
            to: '/apps/email/inbox',
          },
          {
            component: CNavItem,
            name: 'Message',
            badge: {
              color: 'danger-gradient',
              text: 'PRO',
            },
            to: '/apps/email/message',
          },
          {
            component: CNavItem,
            name: 'Compose',
            badge: {
              color: 'danger-gradient',
              text: 'PRO',
            },
            to: '/apps/email/compose',
          },
        ],
      },
    ],
  },
]

export default _nav
