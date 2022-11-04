import { useState, useEffect } from "react"

const useChange = (initialData) => {
  const [data, setData] = useState(initialData)
  
  useEffect(() => {
    setData(initialData)   
    }, [initialData]
  )

  const handleChange = (e, _callback = null) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
    if (_callback){
      _callback()
    }
  }

  const handleChangeFile = (e, setFile) => {
    setFile(e.target.files[0])
  }

  const resetData = () => {
    setData(initialData)
  }


  return { data, handleChange, handleChangeFile, resetData, setData }
}

export default useChange