import './App.css'
import { useState } from 'react'
import Main from './view/main'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import OneProduct from './components/OneProduct';
import EditProduct from './components/EditProduct';

function App() {

  // const [productList, setProductList] = useState([])

  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/viewProduct/:id' element={<OneProduct/>}/>
          <Route path='/editProduct/:id' element={<EditProduct/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
