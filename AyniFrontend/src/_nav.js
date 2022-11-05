import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
  faGaugeHigh,
  faUsersGear,
  faHandshake,
  faListCheck,
  faClipboardList,
  faLaptopFile,
  faFileContract,
  faPeopleGroup,
  faNetworkWired,
  faRocket,
  faPiggyBank,
  faMoneyBillTransfer
} from '@fortawesome/free-solid-svg-icons'

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
    icon: <FontAwesomeIcon icon={faListCheck} inverse className="me-3 ms-1" size='lg' />,
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
        to: '/pendientes/general',
      },
      {
        component: CNavItem,
        name: 'Por colaborador',
        to: '/pendientes/ejecutivos',
      }
    ],
  },
  {
    component: CNavGroup,
    name: 'Órdenes de Trabajo',
    icon: <FontAwesomeIcon icon={faClipboardList} inverse className="me-4 ms-1" size='lg' />,
    items: [
      {
        component: CNavItem,
        name: 'General',
        to: '/ordenes-trabajo/general',
      },
      {
        component: CNavItem,
        name: 'Por Ejecutivo',
        to: '/ordenes-trabajo/ejecutivos',
      }
    ],
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
    name: 'Áreas y Puestos',
    to: '/areas-puestos',
    icon: <FontAwesomeIcon icon={faNetworkWired} inverse className="me-3 ms-1" size='lg' />,
  },
  {
    component: CNavItem,
    name: 'Formas de Pago',
    to: '/formas-pago',
    icon: <FontAwesomeIcon icon={faMoneyBillTransfer} inverse className="me-3 ms-1" size='lg' />,
  },
  {
    component: CNavItem,
    name: 'Bancos',
    to: '/bancos',
    icon: <FontAwesomeIcon icon={faPiggyBank} inverse className="me-3 ms-1" size='lg' />,
  }
]

export default _nav
