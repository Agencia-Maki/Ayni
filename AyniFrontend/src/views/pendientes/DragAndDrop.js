import React, { useState,  useRef} from "react";
// import ReactDOM from "react-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
  faTrash,
  faPencil,
  faCheck
} from '@fortawesome/free-solid-svg-icons'
import {
  CRow,
  CCol,
  CCard,
  CButton,
  CCardHeader,
  CCardBody,
  CCardFooter
} from '@coreui/react-pro'
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import Data from './Data'

import Card from "../extras/Card"
import Form from './Form'
import { reorder, move , cargar} from './extras/function'


const DragAndDrop = () => {
  const [visible, setVisible] = useState(false)
  const [validated, setValidated] = useState(false)
  const formRef = useRef(null)

  const fun = () => {
    console.log("XD")
    setVisible(true)
  }

  const handleSubmit = (event) => {
    const form = formRef.current
    if (form.checkValidity() === false) {
      event.stopPropagation()
    } else {
      alert("se ha validado y se esta enviando")
      // aqui poner el usecrud para crear el banco
    }
    setValidated(true)
  }

  const Colaboradores = []
  cargar(Data, Colaboradores)

  const [state, setState] = useState( Colaboradores )

  function onDragEnd( result) {
    const { source, destination } = result;
    if (!destination) { // dropped outside the list
      return;
    }
    const sInd = +source.droppableId;
    const dInd = +destination.droppableId;
  
    if (sInd === dInd) {
      const items = reorder(state[sInd], source.index, destination.index);
      const newState = [...state];
      newState[sInd] = items;
      setState(newState);
    } else {
      const result = move(state[sInd], state[dInd], source, destination);
      const newState = [...state];
      newState[sInd] = result[sInd];
      newState[dInd] = result[dInd];
  
      setState(newState.filter(group => group.length));
    }
  }

  function Title() {
    return "Crear Nuevo Pendiente";
  }

  return (
    <>

    <Card
        Form={Form} //formulario 
        Title={Title}
        visible={visible}
        setVisible={setVisible}
        formRef={formRef}
        validated={validated}
        setValidated={setValidated}
        handleSubmit={handleSubmit}
    />

    <CRow>
      <CCol>
        <CCard
        className={`mb-4 border border-primary`}
        >
        <CCardHeader>
          <CCol className="float-end">
            <CButton type="button"
              onClick={ () => fun() }
            >
              Crear Pendiente
            </CButton>
          </CCol>
        </CCardHeader>  

        <CCardBody>

          <CRow>
            <CCol 
            style={{ 
              background: "#16E7B1",
            }}>Jorge</CCol>
            <CCol>Rous</CCol>
            <CCol 
            style={{ 
              background: "#16E7B1",
            }}>Sofi</CCol>
          </CRow>

          <CCol style={{ display: "flex" }}>
            <DragDropContext onDragEnd={onDragEnd}>
              {state.map((el, ind) => (
                <Droppable key={ind} droppableId={`${ind}`}>
                  {(provided, snapshot) => (
                    <CCard className="me-4"
                      style={{ 
                        background: "#000000",
                        minWidth: 'auto',
                        // margin: "auto"
                      }}
                      ref={provided.innerRef}
                      {...provided.droppableProps}
                    >
                      {el.map((item, index) => (
                        <Draggable
                          key={item.id}
                          draggableId={item.id}
                          index={index}
                        >
                          {(provided, snapshot) => (
                            <CCard
                              className={`mb-2 me-2 border border-dark`}
                              color="light"
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                            >
                              <CCard
                                style={{
                                  width: '9cm',
                                  height: 'auto',
                                  // display: "flex",
                                  // justifyContent: "space-around",
                                }}
                              >
                                <CCardHeader>
                                  <strong>{item.description}</strong>
                                </CCardHeader>
                                <CCardBody>
                                  <small>
                                    {item.start_hour}
                                  </small><br/>
                                  <small>
                                    {item.end_hour}
                                  </small><br/>
                                  <small>
                                    {item.state}
                                  </small>
                                </CCardBody>
                                <CCardFooter style={{ margin: "auto"}}>
                                  <CButton size={'sm'} color={'primary'}
                                    className="me-2"
                                  >
                                    <FontAwesomeIcon icon={faPencil} inverse />
                                  </CButton>
                                  <CButton size={'sm'} color={'success'}
                                  className="me-2"
                                  >
                                    <FontAwesomeIcon icon={faCheck} inverse />
                                  </CButton>
                                  <CButton size={'sm'} color={'danger'}
                                    className="me-2"
                                    onClick={() => {
                                      const newState = [...state];
                                      newState[ind].splice(index, 1);
                                      setState(
                                        newState.filter(group => group.length)
                                      );
                                    }}
                                  >
                                    <FontAwesomeIcon icon={faTrash} inverse />
                                  </CButton>
                                </CCardFooter>
                              </CCard>
                            </CCard>
                          )}
                        </Draggable>
                      ))}
                      {provided.placeholder}
                    </CCard>
                  )}
                </Droppable>
              ))}
            </DragDropContext>
          </CCol>
        </CCardBody>
        </CCard>
      </CCol>
    </CRow>
    </>
  )
}

export default DragAndDrop