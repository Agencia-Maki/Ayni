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
    // console.log(user)
    const { login, password } = user;
    LoginUser(login, password);
    setUser({
      login: '',
      password: ''
    });
  }

  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={8}>
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm onSubmit={onSubmit}>
                    <h1>Ingresar</h1>
                    <p className="text-medium-emphasis">Ingresa tus credenciales</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput 
                        placeholder="login" 
                        autoComplete="login" 
                        name="login" 
                        onChange={e => setUser({ ...user, login: e.target.value })} 
                        value={user.login}
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        type="password"
                        placeholder="Password"
                        name="password"
                        onChange={e => setUser({ ...user, password: e.target.value })}
                        value={user.password}
                      />
                    </CInputGroup>
                    <CRow>
                      <CCol xs={6}>
                        <CButton color="primary" className="px-4" type='submit'>
                          Login
                        </CButton>
                      </CCol>
                      <CCol xs={6} className="text-right">
                        <CButton color="link" className="px-0">
                          Forgot password?
                        </CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              <CCard className="text-white py-5" style={{ width: '44%', backgroundColor: '#000'}}>
                <CCardBody className="text-center">
                  <div>
                    <h2>AYNI</h2>
                    <p>
                      Sistema de gestion de MAKI
                    </p>
                  </div>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
      {isLoginPending && <div>Please wait...</div>}
      {isLoggedIn && <div>Success.</div>}
      {loginError && <div>{loginError.message}</div>}
    </div>
  )
}

export default Login
