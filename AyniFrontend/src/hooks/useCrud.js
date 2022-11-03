import axios from "axios"
import AxiosInstance from '../utils/AxiosInstance'

const useCrud = (url) => {

  const getModel = async(_url = url) => {
    const response = await AxiosInstance.get(_url)
    return response.data
  }

  return {
    getModel
  }
}

export default useCrud