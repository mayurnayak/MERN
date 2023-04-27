import './App.css'
import { useState } from 'react'
import Display from './components/Display';
import CreateProduct from './components/CreateProduct';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

function App() {

  const [productList, setProductList] = useState([])

  return (
    <div className="App">
      <h1>Product Manager</h1>
      <BrowserRouter>
        {/* <Link to={'/'}>Home</Link> */}
        {/* <br />
        <Link to={'/createProduct/form'}>Add a New Product</Link>
        <br/>
        <Link to={'/display'}>Display</Link> */}

        <Routes>
          <Route path='/' element={<CreateProduct/>}/>
          <Route path='/' element={<Display productList={productList} setProductList={setProductList} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
