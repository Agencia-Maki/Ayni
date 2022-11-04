import React  from "react"
import {
  CButton,
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter
} from '@coreui/react-pro'

const ModalForm = (props) => {

  const { validated, visible, Title, currentBank, typeForm } = props
  const { setValidated, handleChange, handleInsertBank, handleUpdateBank, closeModal } = props

  const {formRef} = props

  return (
    <>
      <CModal size="xl" visible={visible} alignment="center" onClose={() => closeModal()}>
        <CModalHeader>
          <CModalTitle>
            {Title}
          </CModalTitle>
        </CModalHeader>
        <CModalBody>

          <props.Form
            formRef={formRef}
            validated={validated}
            setValidated={setValidated}
            handleInsertBank={handleInsertBank}
            handleChange={handleChange}
            currentBank={currentBank}
            typeForm={typeForm}
          />

        </CModalBody>
        <CModalFooter>
          <CButton color="success" onClick={typeForm === "create" ? (e) => handleInsertBank(e) : (e) => handleUpdateBank(e)}>
            {typeForm === "create" ? "Registrar" : "Actualizar"}
          </CButton>
          <CButton color="secondary" onClick={() => closeModal()}>
            Cerrar
          </CButton>
        </CModalFooter>
      </CModal>
    </>
  )
}

export default ModalForm