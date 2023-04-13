import './App.css'
import { useState } from 'react'
import Main from './view/main'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import OneProduct from './components/OneProduct';

function App() {

  // const [productList, setProductList] = useState([])

  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/viewProduct/:id' element={<OneProduct/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
