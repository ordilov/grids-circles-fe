import './App.css';
import {Route, Routes} from 'react-router-dom';
import React from "react";
import NewOrder from "./pages/New-Order";
import Products from "./pages/Products";
import NewProduct from "./pages/New-Product";
import UpdateProduct from "./pages/Update-Product";
import Menu from "./pages/Menu";
import Orders from "./pages/Orders";
import UpdateOrder from "./pages/Update-Order";

function App() {
    return (
        <Routes>
            <Route path={"/"} element={<Menu/>}/>
            <Route path={"/new-product"} element={<NewProduct/>}/>
            <Route path={"/new-order"} element={<NewOrder/>}/>
            <Route path={"/products/:productId"} element={<UpdateProduct/>}/>
            <Route path={"/orders/:orderId"} element={<UpdateOrder/>}/>
            <Route path={"/admin/products"} element={<Products/>}/>
            <Route path={"/admin/orders"} element={<Orders/>}/>
        </Routes>
    )
}

export default App;