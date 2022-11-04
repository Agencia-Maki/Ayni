import { createContext, useState } from 'react'
import { toast } from 'react-toastify';

export const AuthContext = createContext(null);

const global_url_api = process.env.REACT_APP_API_URL

const initialState = {
  isLoggedIn: false,
  isLoginPending: false,
  loginError: null
}

export const ContextProvider = props => {
  const [state, setState] = useState(initialState);

  const setLoginPending = (isLoginPending) => setState({ isLoginPending });
  const setLoginSuccess = (isLoggedIn) => setState({ isLoggedIn });
  const setLoginError = (loginError) => setState({ loginError });

  const login = (login, password) => {
    setLoginPending(true);
    setLoginSuccess(false);
    setLoginError(null);

    fetchLogin(login, password, error => {
      setLoginPending(false);
      if (!error) {
        setLoginSuccess(true);
      } else {
        setLoginError(error);
      }
    })
  }

  const logout = async() => {
    setLoginPending(false);
    setLoginSuccess(false);
    setLoginError(null);

    let response = await fetch(`${global_url_api}/users/sign_out`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${JSON.parse(localStorage.getItem("currentData")).access_token}`
      }
    })
    if (response.status === 200) {
      localStorage.removeItem('currentData')
      toast.success('Cerraste sesion con exito!', {theme: "dark"})
      setTimeout(() => {
        window.location.reload()
      }, 1300)
    }else {
      localStorage.removeItem('currentData')
      window.location.reload()
    }
  }

  return (
    <AuthContext.Provider
      value={{
        state,
        login,
        logout,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

const fetchLogin = async (login, password, callback) => {
  let response = await fetch(`${global_url_api}/users/sign_in`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ 'login': login, 'password': password })
  })
  let data = await response.json()

  if (response.status === 200) {
    localStorage.setItem('currentData', JSON.stringify(data))
    callback(null)
  } else {
    return callback(new Error(toast.error('Credenciales Invalidas', {theme: "dark"})));
  }
}