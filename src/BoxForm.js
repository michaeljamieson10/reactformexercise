import React, { useState } from "react";
// import uuid from 'uuid/v4';


const BoxForm = ({addBox}) => {
  const handleSubmit = evt => {
    evt.preventDefault();
    console.log("Check out state ->", formData);
    // do something with the data submitted
    addBox(formData);
    setFormData({
      height: "",
      width: "",
      backgroundColor: ""
    });
  };

  const [formData, setFormData] = useState({
    height: "",
    width: "",
    backgroundColor: ""
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
      <label htmlFor="height">height:</label>
      <input
        id="height"
        name="height"
        value={formData.height}
        onChange={handleChange}
      />

      <label htmlFor="width">width:</label>
      <input
        id="width"
        name="width"
        value={formData.width}
        onChange={handleChange}
      />

      <label htmlFor="backgroundColor">backgroundColor:</label>
      <input
        id="backgroundColor"
        name="backgroundColor"
        value={formData.backgroundColor}
        onChange={handleChange}
      />
      <button>Add a new square!</button>
    </form>
  );
};
// end

export default BoxForm;
