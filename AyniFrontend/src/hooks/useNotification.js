import { toast } from 'react-toastify';

const useNotification = () => {
  const setToast = (_data) => {   
    if (_data.status === 200) {
      toast.success(_data.data.message, {theme: "dark"})
    } else {
      toast.error(_data.error, {theme: "dark"})
    }
  }
  return { setToast }
}

export default useNotification