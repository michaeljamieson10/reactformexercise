import React, { useState } from "react";
// import uuid from 'uuid/v4';


const TextForm = ({addTodo}) => {
  const handleSubmit = evt => {
    evt.preventDefault();
    console.log("Check out state ->", formData);
    // do something with the data submitted
    addTodo(formData);
    setFormData({
      text: ""
    });
  };

  const [formData, setFormData] = useState({
    text: ""
  });

  const handleChange = evt => {
    const { name, value } = evt.target;
    setFormData(fData => ({
      ...fData,
      [name]: value
    }));
  };
  // end handleChange

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="text">text:</label>
      <input
        id="text"
        name="text"
        value={formData.name}
        onChange={handleChange}
      />

  
      <button>Add a new todo!</button>
    </form>
  );
};
// end

export default TextForm;
