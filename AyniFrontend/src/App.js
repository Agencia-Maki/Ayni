import React, { Suspense, useContext } from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import './scss/style.scss'

import { AuthContext } from './context/AuthContext.js';


const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))
const Login = React.lazy(() => import('./views/pages/login/Login'))

const App = () => {
  const { state } = useContext(AuthContext)

  if (!state.isLoggedIn && !localStorage.getItem("currentData"))
    return (
      <HashRouter>
        <Suspense fallback={loading}>
          <Routes>
            <Route path="*" name="Maki" element={<Login />} />
          </Routes>
        </Suspense>
      </HashRouter>
    )
  else
    return (
      <HashRouter>
        <Suspense fallback={loading}>
          <Routes>
            <Route path="*" name="Maki" element={<DefaultLayout />} />
          </Routes>
        </Suspense>
      </HashRouter>
    )
}

export default App
