// import { element } from 'prop-types'
import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const Clientes = React.lazy(() => import('./views/clientes/Clientes'))
const Bancos = React.lazy(() => import('./views/bancos/Bancos'))
const CotizacionG = React.lazy(() => import('./views/pendientes/General'))
const CotizacionE = React.lazy(() => import('./views/pendientes/Ejecutivo'))
const OrdenesG = React.lazy(() => import('./views/ordenes/General'))
const OrdenesE = React.lazy(() => import('./views/ordenes/Ejecutivo'))

const routes = [
  { path: '/', exact: true, name: 'Ayni' },
  { path: '/dashboard', exact: true, name: 'Dashboard', element: Dashboard },
  { path: '/bancos', exact: true, name: 'Bancos', element: Bancos },
  { path: '/clientes', exact: true, name: 'Clientes', element: Clientes },
  { path: '/cotizaciones/general', exact: true, name: 'Cotización General', element: CotizacionG },
  { path: '/cotizaciones/ejecutivos', exact: true, name: 'Cotización Ejecutivo', element: CotizacionE},
  { path: '/ordenes-trabajo/general', exact: true, name: 'Ordenes General', element: OrdenesG },
  { path: '/ordenes-trabajo/ejecutivos', exact: true, name: 'Ordenes Ejecutivo', element: OrdenesE}
]

export default routes
