import React, { useState } from 'react';

function DynamicTable() {
  const [tableData, setTableData] = useState([]);
  const [fieldNames, setFieldNames] = useState([]);

  function handleFileUpload(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = function(e) {
      const data = JSON.parse(e.target.result);
      setTableData(data);
      setFieldNames(Object.keys(data[0]));
    }
    reader.readAsText(file);
  }

  return (
    <div>
      <input type="file" onChange={handleFileUpload} />
      <table>
        <thead>
          <tr>
            {fieldNames.map(name => (
              <th key={name}>{name}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableData.map(item => (
            <tr key={item.id}>
              {fieldNames.map(name => (
                <td key={name}>{item[name]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DynamicTable;
