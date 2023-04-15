import React from 'react';
import './App.css';
import Table from "./components/Table/Table";
import Filter from './components/Filter/Filter';

function App() {
  return (
    <div className="App">
      <h1>Draw table</h1>
      <Table/>
      <Filter/>
    </div>
  );
}

export default App;
