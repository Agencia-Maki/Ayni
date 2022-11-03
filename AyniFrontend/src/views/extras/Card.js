import React  from "react"
import {
  CButton,
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter
} from '@coreui/react-pro'

const Card = (props) => {

  const {validated, setValidated, handleSubmit, Title} = props
  const { visible, setVisible } = props

  const {formRef} = props

  return (
    <>
      {console.log(formRef)}
      <CModal size="xl" visible={visible} alignment="center" onClose={() => setVisible(false)}>
        <CModalHeader>
          <CModalTitle>
              <Title/>
          </CModalTitle>
        </CModalHeader>
        <CModalBody>

          <props.Form
            formRef={formRef}
            validated={validated}
            setValidated={setValidated}
            handleSubmit={handleSubmit}
          />

        </CModalBody>
        <CModalFooter>
          <CButton color="success" onClick={(e) => handleSubmit(e)}>
            Crear
          </CButton>
          <CButton color="secondary" onClick={() => setVisible(false)}>
            Cerrar
          </CButton>
        </CModalFooter>
      </CModal>
    </>
  )
}

export default Card