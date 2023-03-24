import { useState } from 'react';
import './App.css';
import DisplayData from './Components/DisplayData';
import Form from './Components/Form';


function App() {

  const [showData, setShowData] = useState([])

  return (
    <div className="App">
      <Form showData={showData} setShowData={setShowData}/>
      <DisplayData showData={showData}/>
    </div>
  );
}

export default App;
