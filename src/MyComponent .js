import React, { useState } from 'react';
import axios from 'axios';

const MyComponent = () => {
  const [sqlString, setSqlString] = useState('');

  const handleSqlStringChange = (event) => {
    setSqlString(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('https://localhost:7291/api/DbCreateApi', { sqlString })
      .then(response => {
        console.log('Table created successfully');
      })
      .catch(error => {
        console.error('Error creating table:', error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        SQL String:
        <textarea value={sqlString} onChange={handleSqlStringChange} />
      </label>
      <button type="submit">Create Table</button>
    </form>
  );
};

export default MyComponent;

