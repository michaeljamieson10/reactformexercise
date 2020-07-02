import React,{ useState } from 'react';
import Box from './Box';
import BoxForm from  './BoxForm'
import {v4 as uuid} from 'uuid';

function BoxList() {
    const INITIAL_STATE = [
        { id: uuid() ,height: '212px', width: '200px',backgroundColor:'red'},
        { id: uuid() ,height: '200px', width: '150px',backgroundColor:'green' }
      ]
    const [boxes, setBoxes] = useState(INITIAL_STATE);
    const addBox = (newBox) => {
        setBoxes(items => [...items, { ...newBox , id:uuid() }])
    }
    const removeBox = (id) => {
        const filteredBoxArr = boxes.filter(box => box.id !== id)
        setBoxes([...filteredBoxArr])
    }
 
  return (
    <div>
        {boxes.map((box) => (<Box height={box.height} width={box.width} backgroundColor={box.backgroundColor} addBox={addBox} removeBox={removeBox} key={box.id} id={box.id}/>))}
        <BoxForm addBox={addBox}/>
    </div>
  );
}

export default BoxList;