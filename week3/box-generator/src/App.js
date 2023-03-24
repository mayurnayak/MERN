import './App.css';
import Addcolor from './Components/Addcolor';
import Display from './Components/Display';
import { useState } from 'react';


function App() {

  const [addBox, setAddBox] = useState([]);

  return (
    <div className="App">
      <Addcolor addBox={addBox} setAddBox={setAddBox}/>
      <Display addBox={addBox}/>
    </div>
  );
}

export default App;
