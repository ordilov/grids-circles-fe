import '../App.css';
import React, {useEffect, useState} from "react";
import axios from "axios";
import {ProductList} from "../components/ProductList";
import {Summary} from "../components/Summary";
import {ProductType} from "../types/product";

function NewOrder() {
    const [products, setProducts] = useState<ProductType[]>([]);
    const [items, setItems] = useState<any>([]);

    const handleAddClicked = (productId: string) => {
        const product = products.find(v => v.productId === productId);
        const found = items.find((v: any) => v.productId === productId);
        const updatedItems = found ? items.map(
                (v: any) => (v.productId === productId) ? {...v, count: v.count + 1} : v)
            : [...items, {...product, count: 1}]
        setItems(updatedItems)
    };
    useEffect(() => {
        axios.get("http://localhost:8080/api/v1/products")
            .then(v => setProducts(v.data))
    }, [])
    const handleOrderSubmit = (order: any) => {
        if (items.length === 0) {
            alert("아이템을 추가해 주세요!");
            return
        }
        axios.post("http://localhost:8080/api/v1/orders", {
            email: order.email,
            address: order.address,
            postcode: order.postcode,
            orderItems: items.map((v: any) => ({
                productId: v.productId,
                category: v.category,
                price: v.price,
                quantity: v.count
            }))
        }).then(
            v => alert("주문이 정상적으로 접수되었습니다."),
            e => {
                alert("서버 장애");
                console.error(e);
            })
    }
    const container = {
        display: 'block',
        'text-align': 'center',
        justifyContent: 'center',
        margin: '0 auto',
    }


    return (
        <div style={container}>
            <h1>Grids & Circle</h1>
            <div>
                <ProductList products={products} onAddClick={handleAddClicked}/>
            </div>
            <div>
                <Summary items={items} onOrderSubmit={handleOrderSubmit}/>
            </div>
        </div>
    );
}

export default NewOrder;