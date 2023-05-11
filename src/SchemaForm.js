import React, { useState } from "react";
import axios from "axios";

const SchemaForm = () => {
  const [formData, setFormData] = useState({
   
    properties: {
      fileName: {
        type: "string",
      },
      fieldName: {
        type: "string",
      },
      ContentType: {
        type: "string",        
      },
    },
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Convert the form data to a JSON string
    const jsonString = JSON.stringify(formData);

    try {
      // Send the JSON string to the API
      const response = await axios.post("https://localhost:7291/api/DbCreateApi", jsonString)

      if (response.status === 200) {
        console.log("Schema created successfully");
      } else {
        console.error("Error creating schema");
      }
    } catch (error) {
      console.error(error);
    }
  };
console.log(handleSubmit);
  const handleInputChange = (event) => {
    const { name, value } = event.target;

    // Update the form data with the new input value
    setFormData((prevState) => ({
      ...prevState,
      properties: {
        ...prevState.properties,
        [name]: {
          ...prevState.properties[name],
          title: value,
        },
      },
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      
      {Object.keys(formData.properties).map((key) => (
        <div key={key}>
          <label>
            {key} :
            <input
              type="text"
              name={key}
              value={formData.properties[key].title || ""}
              onChange={handleInputChange}
            />
          </label>
          <br />
          <label>
            {key} :
            <select
              name={`${key}-type`}
              value={formData.properties[key].type}
              onChange={(event) =>
                setFormData((prevState) => ({
                  ...prevState,
                  properties: {
                    ...prevState.properties,
                    [key]: {
                      ...prevState.properties[key],
                      type: event.target.value,
                    },
                  },
                }))
              }
            >
              <option value="string">String</option>
              <option value="number">Number</option>
              <option value="boolean">Boolean</option>
            </select>
          </label>
          <br />
        </div>
      ))}
      <button type="submit">Create Schema</button>
    </form>
  );
};

export default SchemaForm;
