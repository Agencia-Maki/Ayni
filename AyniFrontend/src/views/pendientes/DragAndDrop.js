import React, { useState} from "react";
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

// fake data generator
const getItems = (count, offset = 0) =>
  Array.from({ length: count }, (v, k) => k).map(k => ({
    id: `item-${k + offset}-${new Date().getTime()}`,
    content: `item ${k + offset}`
  }))

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
}

/**
 * Moves an item from one list to another list.
 */
 const move = (source, destination, droppableSource, droppableDestination) => {
  const sourceClone = Array.from(source);
  const destClone = Array.from(destination);
  const [removed] = sourceClone.splice(droppableSource.index, 1);

  destClone.splice(droppableDestination.index, 0, removed);

  const result = {};
  result[droppableSource.droppableId] = sourceClone;
  result[droppableDestination.droppableId] = destClone;

  return result;
}

const existe = ( info , param ) => {
  return ( info.findIndex( (it) => it[0].id_colaborator === param ) )
}

const cargar = (Array) => {
  for(let i = 0; i < Data.length; i++){
    let id = Data[i].id_colaborator
    let pos = existe(Array, id)
    if(pos === -1 ){
      Array.push( [Data[i]] )
    }
    else{
      Array[pos].push( Data[i] )
    }
  }
}

const DragAndDrop = () => {

  const Colaboradores = []
  cargar(Colaboradores)

  const [state, setState] = useState( Colaboradores )  

  function onDragEnd(result) {
    const { source, destination } = result;
    // dropped outside the list
    if (!destination) {
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

  return (
    <CRow>
      <CCol>
        <CCard
        className={`mb-4 border border-primary`}
        >
        <CCardHeader>
          <CCol className="float-end">
            <CButton type="button"
              onClick={() => {
                setState([...state, []]);
              }}
            >
              Crear grupo
            </CButton>
            <CButton type="button"
              onClick={() => {
                setState([...state, getItems(1)]);
              }}
            >
              Crear item
            </CButton>
          </CCol>
        </CCardHeader>  

        <CCardBody>
          <CCol style={{ display: "flex" }}>
            <DragDropContext onDragEnd={onDragEnd}>
              {state.map((el, ind) => (
                <Droppable key={ind} droppableId={`${ind}`}>
                  {(provided, snapshot) => (
                    <CCard className="me-4"
                      style={{ 
                        background: "#000000",
                        minWidth: '6cm',
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
                                  width: '6cm',
                                  height: '6cm',
                                  display: "flex",
                                  justifyContent: "space-around",
                                }}
                              >
                                <CCardHeader>
                                  {item.description}
                                </CCardHeader>
                                <CCardBody>
                                  <h5>
                                    {item.start_hour}
                                  </h5>
                                  <h5>
                                    {item.end_hour}
                                  </h5>
                                  <h5>
                                    {item.state}
                                  </h5>
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
  )
}

export default DragAndDrop