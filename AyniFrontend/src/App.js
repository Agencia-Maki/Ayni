import React, { Suspense, useContext } from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import './scss/style.scss'

import { AuthContext } from './context/AuthContext.js';


const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))

// Pages
const Login = React.lazy(() => import('./views/pages/login/Login'))
const Register = React.lazy(() => import('./views/pages/register/Register'))
const Page404 = React.lazy(() => import('./views/pages/page404/Page404'))
const Page500 = React.lazy(() => import('./views/pages/page500/Page500'))

// Email App
// const EmailApp = React.lazy(() => import('./views/apps/email/EmailApp'))

const App = () => {
  const { state } = useContext(AuthContext)

  console.log(state)

  // return (
  //   <HashRouter>
  //     <Suspense fallback={loading}>
  //       <Routes>
  //         {
  //           localStorage.getItem("authTokens") === null ?
  //             <Route path="*" element={<Login />} /> :
  //             <Route path="*" name="Dashboard" element={<DefaultLayout />} />
  //         }

  //         <Route exact path="/login" name="Login Page" element={<Login />} />
  //         <Route exact path="/register" name="Register Page" element={<Register />} />
  //         <Route exact path="/404" name="Page 404" element={<Page404 />} />
  //         <Route exact path="/500" name="Page 500" element={<Page500 />} />
  //         <Route path="*" name="Maki" element={<DefaultLayout />} />
  //       </Routes>
  //     </Suspense>
  //   </HashRouter>
  // )

  if (!state.isLoggedIn)
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
