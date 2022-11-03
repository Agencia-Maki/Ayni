export const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
}

export const move = (source, destination, droppableSource, droppableDestination) => {
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

export const cargar = (Data, Array) => {
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