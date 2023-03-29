
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import UserInput from './components/UserInput';
import Form from './components/Form';

function App() {
  return (
    <div className="App">
      <h1>React Routing</h1>
      <Routes>
        <Route path='/' element={<Form/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/:user' element={<UserInput/>} />
        <Route path='/:user/:divColor/:textColor' element={<UserInput/>} />
        
      </Routes>
    </div>
  );
}

export default App;
