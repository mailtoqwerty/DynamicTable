import React, { useState, useEffect } from "react";
import axios from 'axios';

function MapDataComponent() {
  const [table1, setTable1] = useState([]);
  const [table2, setTable2] = useState([]);

  useEffect(() => {
    axios.get('http://192.168.29.128/api/ConfigValidations')
        .then(res=>setTable1(res.data))            
        .catch(error => {console.error(error)})
  }, []);

  const handleMapData = () => {
    const mappedData = table1.map(({ fileName, field,width ,dataType,precision,mandatory,defaultValidation}) => ({ fileName, field,width ,dataType,precision,mandatory,defaultValidation }));
    setTable2(mappedData);
  };

  return (
    <div>
      <h2>Table 1</h2>
      <table>
      <thead>
        <tr className='bg-warning  '>
            <th className='p-2'>FileName</th>   
            <th className='p-2'>Field</th>                            
            <th className='p-2'>Width</th>  
            <th className='p-2'>DataType</th>   
            <th className='p-2'>Precision</th>                              
            <th className='p-2'>Mandatory</th>   
            <th className='p-2'>Default_Validation</th>   
        </tr>
        </thead>                       
            {
                table1.map((item,id)=>{
                    return(
                        <tr key={id}>
                            <td>{item.fileName}</td>
                            <td>{item.field}</td>
                            <td>{item.width}</td>
                            <td>{item.dataType}</td>
                            <td>{item.precision}</td>
                            <td>{item.mandatory}</td>
                            <td>{item.defaultValidation}</td>
                        </tr>
                    )
                })
            } 
        
      </table>
      <button onClick={handleMapData}>Map Data</button>
      <h2>Table 2</h2>
      <table>
      <thead>
        <tr className='bg-warning  '>
            <th className='p-2'>FileName</th>   
            <th className='p-2'>Field</th>                            
            <th className='p-2'>Width</th>  
            
        </tr>
        </thead>                       
            {
                table2.map((item,id)=>{
                    return(
                        <tr key={id}>
                            <td>{item.fileName}</td>
                            <td>{item.field}</td>
                            <td>{item.width}</td>
                            
                        </tr>
                    )
                })
            } 
        
      </table>
      
    </div>
  );
}

export default MapDataComponent;
