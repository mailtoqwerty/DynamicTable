import React, { useState } from 'react';
import axios from 'axios';
// import sqlstring from 'sqlstring';

export default function CreateTableForm() {

  const [tableName, setTableName] = useState('');
  const [columns, setColumns] = useState([{ name: '', type: '', primaryKey: false, default: '' }]);


  const handleTableNameChange = (event) => {
    setTableName(event.target.value);
  };

  const handleColumnChange = (event, index) => {
    const { name, value, type, checked } = event.target;
    setColumns(prevColumns => {
      const updatedColumns = [...prevColumns];
      updatedColumns[index][name] = type === 'checkbox' ? checked : value;
      return updatedColumns;
    });
  };

  // Handle adding a new column to the form
  const handleAddColumn = () => {
    setColumns(prevColumns => [...prevColumns, { name: '', type: '', primaryKey: false, default: '' }]);
  };

  // Handle submitting the form to create the table
  const handleSubmit = (event) => {
    event.preventDefault();

    // Generate the SQL string using sqlstring
    const sql = `CREATE TABLE ${tableName} (${columns.map(column => `${column.name} ${column.type}${column.primaryKey ? ' PRIMARY KEY' : ''}${column.default ? ` DEFAULT ${column.default}` : ''}`).join(', ')});`;

    // Send the SQL string to the API endpoint
    // axios.post('http://192.168.29.128/api/ConfigExtractions', data)
    // .then(response => {setColumns(response.data)})
    // .catch(error => {console.error(error)});

    axios.post('https://localhost:7291/api/DbCreateApi',{sql})    
    .then(response => {setColumns('Table created successfully:', response.data)})
    .catch(error => {console.error('Error creating table:', error);        
      console.log(sql)
    });
  };

  // Render the form
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Table name:
        <input type="text" value={tableName} onChange={handleTableNameChange} />
      </label>
      {columns.map((column, index) => (
        <div key={index}>
          <label>
            Column name:
            <input type="text" name="name" value={column.name} onChange={event => handleColumnChange(event, index)} />
          </label>
          <label>
            Column type:
            <input type="text" name="type" value={column.type} onChange={event => handleColumnChange(event, index)} />
          </label>
          <label>
            Primary key:
            <input type="checkbox" name="primaryKey" ch ecked={column.primaryKey} onChange={event => handleColumnChange(event, index)} />
          </label>
          <label>
            Default value:
            <input type="text" name="default" value={column.default} onChange={event => handleColumnChange(event, index)} />
          </label>
        </div>
      ))}
      <button type="button" onClick={handleAddColumn}>Add column</button>
      <button type="submit">Create table</button>
    </form> 
  );
}
