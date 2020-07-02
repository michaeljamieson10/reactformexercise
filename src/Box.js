import React from 'react';
// import './Box.css';


function Box({height, width, backgroundColor, removeBox, id}) {
    
    return (
      <>
      <div style={{ height, width, backgroundColor }}></div>
      <button onClick={() => removeBox(id)}>X</button>
      </>
    );
  }
  
  export default Box;