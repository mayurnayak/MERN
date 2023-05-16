import './App.css';
import Display from './components/Display';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Nav from './components/Nav';
import CreateNote from './components/CreateNote';
import OneNote from './components/OneNote';
import EditNote from './components/EditNote';
import Login from './components/Login';
import Register from './components/Register';
import Profile from './components/Profile';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      {/* <Nav/> */}
      <Routes>
        {/* <Route path='/' element={<Display/>} /> */}
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/createNote/form' element={<CreateNote/>}/>
        <Route path='/oneNote/:id' element={<OneNote/>}/>
        <Route path='/editNote/:id' element={<EditNote/>}/>
        <Route path ='/profile' element={<Profile/>}/>
      </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
