import React, { useContext, useState } from 'react'
import { AuthContext } from '../../../context/AuthContext'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react-pro'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'
import { ToastContainer } from 'react-toastify'

const initialState = {
  login: '',
  password: ''
}

const Login = () => {
  const { state: ContextState, login: LoginUser } = useContext(AuthContext)
  const {
    isLoginPending,
    isLoggedIn,
    loginError
  } = ContextState

  const [user, setUser] = useState(initialState);

  const onSubmit = (e) => {
    e.preventDefault();
    const { login, password } = user;
    LoginUser(login, password);
    setUser({
      login: '',
      password: ''
    });
  }

  return (
    <div className="min-vh-100 d-flex flex-row align-items-center" style={{ background: '#181924' }}>
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={8}>
            <CCardGroup>
              <CCard className="p-4" style={{ background: '#24252f' }}>
                <CCardBody>
                  <CForm onSubmit={onSubmit}>
                    <h1 className="text-primary">Ingresar</h1>
                    <p className="text-medium text-light">Ingresa tus credenciales</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupText className="login-icon">
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput 
                        placeholder="DNI" 
                        autoComplete="login" 
                        name="login"
                        className="login-form"
                        onChange={e => setUser({ ...user, login: e.target.value })} 
                        value={user.login}
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupText className="login-icon">
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        type="password"
                        placeholder="Contraseña"
                        name="password"
                        className="login-form"
                        onChange={e => setUser({ ...user, password: e.target.value })}
                        value={user.password}
                      />
                    </CInputGroup>
                    <CRow>
                      <CCol xs={6}>
                        <CButton color="primary" className="px-4" type='submit'>
                          Ingresar
                        </CButton>
                      </CCol>
                      <CCol xs={6} className="text-right">
                        <CButton color="link" className="px-0">
                          ¿Olvidaste tu contraseña?
                        </CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              <CCard className="text-white py-5 d-none d-md-block d-sm-none" style={{ width: '44%', backgroundColor: '#6500FE'}}>
                <CCardBody className="text-center">
                  <div>
                    <h2>AYNI</h2>
                    <p>
                    Sistema de gestión de procesos empresariales, desarrollado por la empresa MAKI.
                    </p>
                  </div>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
      {/* {isLoginPending && <div>Please wait...</div>} */}
      {/* {isLoggedIn && <div>Success.</div>} */}
      {/* {loginError && <div>{loginError.message}</div>} */}
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  )
}

export default Login
