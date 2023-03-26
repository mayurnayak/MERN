
import './App.css';
import Form from './components/Form';
import { useState } from 'react';
import Display from './components/Display';

function App() {

  const [showTodo, setShowTodo] = useState([])

  return (
    <div className="App">
      <Form showTodo={showTodo} setShowTodo={setShowTodo}/>
      <Display showTodo={showTodo} setShowTodo={setShowTodo}/>
    </div>
  );
}

export default App;
