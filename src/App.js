import React from 'react'
import MapDataComponent from './MapDataComponent'
import GenerateStagingTable from './GenerateStagingTable'
import 'bootstrap/dist/css/bootstrap.min.css';
import DynamicTable from './DynamicTable'
import Table from './Table';
import Dynamic from './Dynamic';




const App = () => {
  return (
    <div>
      {/* <MapDataComponent/>
      <GenerateStagingTable/> */}
      <DynamicTable/>
      <Table/>
      <Dynamic/>
    
    </div>
  )
}

export default App

