import AxiosInstance from '../utils/AxiosInstance'
import useNotification from './useNotification'

const useCrud = (url) => {
  const { setToast } = useNotification()

  const getModel = async(_url = url) => {
    const response = await AxiosInstance.get(_url)
    return response.data
  }

  const insertModel = async (data, _url = url) => { 
    const response = await AxiosInstance.post(_url, data)
    if (response.status === 200) {
      setToast(response)
    }
    return response.data
  }

  const updateModel = async (data, _url = url) => {
    const response = await AxiosInstance.put(_url, data)
    if (response.status === 200) {
      setToast(response)
    }
    return response.data
  }

  return {
    getModel,
    insertModel,
    updateModel
  }
}

export default useCrud