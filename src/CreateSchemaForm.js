import React, { useState } from 'react';
import axios from 'axios';

export default function CreateSchemaForm() {
  const [tableName, setTableName] = useState('');
  const [columns, setColumns] = useState([]);

  const handleAddColumn = () => {
    setColumns([...columns, { name: '', type: '' }]);
  };

  const handleColumnChange = (event, index, key) => {
    const newColumns = [...columns];
    newColumns[index][key] = event.target.value;
    setColumns(newColumns);
  };
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    const schemaData = { tableName, columns };
    const url = 'https://localhost:7291/api/DbCreateApi';
    try {
      const response = await axios.post(url, schemaData).then(res=>setTableName(res.data))
     
    } catch (error) { 
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Table Name:
        <input type="text" value={tableName} onChange={(e) => setTableName(e.target.value)} />
      </label>
      {columns.map((column, index) => (
        <div key={index}>
          <label>
            Column Name:
            <input
              type="text"
              value={column.name}
              onChange={(e) => handleColumnChange(e, index, 'name')}
            />
          </label>
          <label>
            Column Type:
            <input
              type="text"
              value={column.type}
              onChange={(e) => handleColumnChange(e, index, 'type')}
            />
          </label>
        </div>
      ))}
      <button type="button" onClick={handleAddColumn}>
        Add Column
      </button>
      <button type="submit">Create Schema</button>
    </form>
  );
}
