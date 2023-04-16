import React from 'react';
import CreateProduct from '../components/CreateProduct';
import Display from '../components/Display';
import { useState } from 'react'

const Main = (props) => {

    const [productList, setProductList] = useState([])

    return (
        <div>
            <h1>Product Manager</h1>
            <CreateProduct productList={productList} setProductList={setProductList}/>
            <Display productList={productList} setProductList={setProductList}/>
        </div>
    );
}

export default Main;
