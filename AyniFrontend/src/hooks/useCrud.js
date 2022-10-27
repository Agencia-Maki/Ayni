import axios from "axios"


const useCrud = (url) => {

  const getModel = async(_url = url) => {
    const response = await axios.get(_url)
    return response.data
  }

  return {
    getModel
  }
}

export default useCrud