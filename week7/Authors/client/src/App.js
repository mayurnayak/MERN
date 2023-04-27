import React from 'react';
import './App.css';
import Display from './components/Display';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import CreateAuthor from './components/CreateAuthor';
import EditAuthor from './components/EditAuthor';

function App() {
  return (
    <div className="App">
      <h1>Favorite Authors</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Display/>} />
          <Route path='/createAuthor/form' element={<CreateAuthor/> } />
          <Route path='/updateAuthor/:id' element={<EditAuthor />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
