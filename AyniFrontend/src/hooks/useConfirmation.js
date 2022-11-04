import Swal from 'sweetalert2'

const useConfirmation = () => {
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: 'btn btn-success mx-2',
      cancelButton: 'btn btn-danger mx-2'
    },
    buttonsStyling: false
  })

  const handleConfirmation = (_title, _text, _callback_confirm, _text_cancel) => {
    swalWithBootstrapButtons.fire({
      title: _title,
      text: _text,
      showCancelButton: true,
      confirmButtonText: 'Si, Ejecutar!',
      cancelButtonText: 'No, Cancelar!',
      reverseButtons: true,
      backdrop: true
    }).then((result) => {
      if (result.isConfirmed) {
        _callback_confirm()
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        swalWithBootstrapButtons.fire(_text_cancel, '', 'primary')
      }
    })
  }

  return { handleConfirmation }
}

export default useConfirmation