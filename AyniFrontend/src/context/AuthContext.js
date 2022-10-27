import { createContext, useState } from 'react';

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

    // let response = await fetch(`${global_url_api}/users/sign_out`, {
    //   method: 'DELETE',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'Authorization': `Bearer ${authTokens.access_token}`
    //   }
    // })
    // if (response.status === 200) {
    //   setAuthTokens(null)
    //   setUser(null)
    //   localStorage.removeItem('authTokens')
    // }
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
  let response = await fetch("http://127.0.0.1:3000/users/sign_in", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ 'login': login, 'password': password })
  })
  let data = await response.json()

  if (response.status === 200) {
    // setAuthTokens(data)
    // setUser(data.user)
    // localStorage.setItem('authTokens', JSON.stringify(data))
    callback(null)
  } else {
    return callback(new Error('Credenciales Invalidas'));
  }


  // if (email === 'admin' && password === 'admin') {
  //   return callback(null);
  // } else {
  //   return callback(new Error('Invalid email and password'));
  // }
}