import axios from 'axios';
import { useState } from 'react';

function GenerateStagingTable() {
  const [message, setMessage] = useState('');

  const handleClick = () => {
    axios.post('')
      .then(response => setMessage(response.data.message))
      .catch(error => console.error(error));
  };

 
  return (
    <div>
      {message && <p>{message}</p>}
      <button onClick={handleClick}>Generate Staging Table</button>
      
    </div>
  );
}

export default GenerateStagingTable;
