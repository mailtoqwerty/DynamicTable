import React, { useState } from 'react';

export default function DynamicForm() {
  const [fields, setFields] = useState([]);

  const addField = () => {
    setFields([...fields, { name: '', value: '' }]);
  };

  const handleChange = (index, event) => {
    const updatedFields = [...fields];
    updatedFields[index][event.target.name] = event.target.value;
    setFields(updatedFields);
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log('Fields:', fields);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {fields.map((field, index) => (
          <div key={index}>
            <input
              type="text"
              name="name"
              value={field.name}
              placeholder="Enter field name"
              onChange={event => handleChange(index, event)}
            />
            <input
              type="text"
              name="value"
              value={field.value}
              placeholder="Enter field value"
              onChange={event => handleChange(index, event)}
            />
          </div>
        ))}
        <button type="button" onClick={addField}>Add Field</button>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
