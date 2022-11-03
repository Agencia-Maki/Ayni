import React from "react"
import {
  CRow,
  CCol,
  CForm,
  CFormInput,
  CFormSelect,
  CTimePicker,
  CDatePicker,
  CFormLabel
} from '@coreui/react-pro'

const Modal = (props) => {

  const {validated} = props
  const {formRef} = props

  return (
    <>
    
      <CForm className="row g-3 needs-validation"
        noValidate
        validated={validated}
        ref={formRef}
      >
      <CRow>
        <CCol>
          <CFormSelect 
            // type="text"
            id="validationServer01"
            label="Nombre del Colaborador"
            // feedbackInvalid="Ingrese un nombre del colaborador."
            // required
            options={[
              'Seleccione un Colaborador',
              { label: 'Jorge', value: '1' },
              { label: 'Rouse', value: '2' },
              { label: 'Sofi', value: '3' }
            ]}
          />
        </CCol>
        <CCol>
          <CFormInput
            type="text"
            id="validationServer03"
            label="Horas implementadas"
            feedbackInvalid="Selecione un rango de horas."
            required
            disabled
          />
        </CCol>
      </CRow>
      <CRow>
        <CCol>
        <CFormLabel>Fecha de inicio</CFormLabel>
          <CDatePicker placeholder="Fecha inicio" locale="es-PE" />
        </CCol>
        <CCol>
        <CFormLabel>Fecha de Fin</CFormLabel>
          <CDatePicker placeholder="Fecha fin" locale="es-PE" />
        </CCol>
        <CCol>
          <CFormLabel>Hora de inicio</CFormLabel>
          <CTimePicker placeholder="Hora inicio" locale="es-PE" />
        </CCol>
        <CCol>
          <CFormLabel>Hora de Fin</CFormLabel>
          <CTimePicker placeholder="Hora fin" locale="es-PE" />
        </CCol>
      </CRow>
      <CCol>
        <CFormInput
          type="text"
          id="validationServer02"
          label="Descripción"
          feedbackInvalid="Ingrese la descripción."
          required
        />
      </CCol>
      </CForm>

    </>
  )
}

export default Modal