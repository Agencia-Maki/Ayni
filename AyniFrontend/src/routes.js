// import { element } from 'prop-types'
import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const Clientes = React.lazy(() => import('./views/clientes/Clientes'))
const Bancos = React.lazy(() => import('./views/bancos/Bancos'))

const routes = [
  { path: '/', exact: true, name: 'Ayni' },
  { path: '/dashboard', exact: true, name: 'Dashboard', element: Dashboard },
  { path: '/bancos', exact: true, name: 'Bancos', element: Bancos },
  { path: '/clientes', exact: true, name: 'Clientes', element: Clientes }
]

export default routes
