// import { element } from 'prop-types'
import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const Clientes = React.lazy(() => import('./views/clientes/Clientes'))
const Bancos = React.lazy(() => import('./views/bancos/Bancos'))
const CotizacionG = React.lazy(() => import('./views/cotizaciones/General'))
const CotizacionE = React.lazy(() => import('./views/cotizaciones/Ejecutivo'))
const PendientesG = React.lazy(() => import('./views/pendientes/General'))
const DragAndDrop = React.lazy(() => import('./views/pendientes/DragAndDrop'))
const PendientesE = React.lazy(() => import('./views/pendientes/Colaborador'))
const FormasPago = React.lazy(() => import('./views/formaPago/FormasPago'))

const routes = [
  { path: '/', exact: true, name: 'Ayni' },
  { path: '/dashboard', exact: true, name: 'Dashboard', element: Dashboard },
  { path: '/bancos', exact: true, name: 'Bancos', element: Bancos },
  { path: '/clientes', exact: true, name: 'Clientes', element: Clientes },
  { path: '/cotizaciones/general', exact: true, name: 'Cotización General', element: CotizacionG },
  { path: '/cotizaciones/ejecutivos', exact: true, name: 'Cotización Ejecutivo', element: CotizacionE},
  { path: '/pendientes/general', exact: true, name: 'Ordenes General', element: PendientesG },
  { path: '/pendientes/general/gestionar', exact: true, name: 'Gestionar Pendientes', element: DragAndDrop },
  { path: '/pendientes/ejecutivos', exact: true, name: 'Ordenes Ejecutivo', element: PendientesE},
  { path: '/formas-pago', exact: true, name: 'Formas de Pago', element: FormasPago }
]

export default routes
