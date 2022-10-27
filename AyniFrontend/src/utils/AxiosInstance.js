import axios from 'axios'
import dayjs from 'dayjs'
import jwt_decode from "jwt-decode"

let authTokens = localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null

const global_url_api = process.env.REACT_APP_API_URL

const AxiosInstance = axios.create({
  baseURL: global_url_api,
  headers: {
    Authorization: `Bearer ${authTokens?.access_token}`,
  }
})

AxiosInstance.interceptors.request.use(async req => {
  if (!authTokens) {
    authTokens = localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null
    req.headers.Authorization = `Bearer ${authTokens?.access_token}`
  }

  const user = jwt_decode(authTokens.access_token)
  const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1;

  if (!isExpired) return req

  await axios.post(`${global_url_api}/users/tokens`, {}, {
    headers: {
      'Authorization': `Bearer ${authTokens.access_token}`,
      'Refresh-Token': `${authTokens.refresh_token}`
    }
  }).then(response => {
    localStorage.setItem('authTokens', JSON.stringify(response.data))
    req.headers.Authorization = `Bearer ${response.data.access_token}`
  }).catch(error => {
    req = null
    localStorage.removeItem('authTokens')
    window.location.reload()
  })

  return req
})

export default AxiosInstance