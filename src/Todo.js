import React from 'react';
// import './Box.css';


function Todo({text, removeTodos, id}) {
    
    return (
      <>
      <p>{text}</p>
      <button onClick={() => removeTodos(id)}>X</button>
      </>
    );
  }
  
  export default Todo;