import React, { useState, useEffect } from "react";
import axios from "axios";
import './App.css'
function Dynamic({ url }) {
  const [data, setData] = useState([]);
  url="http://localhost:5241/api/BatchStautsSummary"
  useEffect(() => {
    axios.get(url).then((response) => {
      setData(response.data);
    });
  }, [url]);

  return (
    <table className="container table table-border form-control">
      <thead>
        <tr className="bg-warning ">
          {data.length > 0 &&
            Object.keys(data[0]).map((key) => <th key={key}>{key}</th>)}
        </tr>
      </thead>
      <tbody className="border">
        {data.map((item, index) => (
          <tr key={index}>
            {Object.values(item).map((value, index) => (
              <td key={index}>{value}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Dynamic;
