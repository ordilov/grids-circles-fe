import React, {useEffect, useState} from "react";
import axios from "axios";
import {ProductType} from "../types/product";
import {Link} from "react-router-dom";

function Products() {
    const [products, setProducts] = useState<ProductType[]>([]);

    useEffect(() => {
        axios.get("http://localhost:8080/api/v1/products")
            .then(v => setProducts(v.data))
    }, [products]);

    const container = {
        display: 'block',
        'text-align': 'center',
        justifyContent: 'center',
        margin: '0 auto',
    };

    const addButton = {
        display: 'inline-block',
        'text-align': 'center',
        margin: '0 auto',
        backgroundColor: '#050505',
        fontSize: '1.5rem',
        color: '#fff',
        'border-radius': '5px',
    }

    const tableButton = {
        display: 'inline-block',
        'text-align': 'center',
        margin: '0 auto',
        backgroundColor: '#050505',
        fontSize: '1rem',
        color: '#fff',
        'border-radius': '5px',
    }

    const card = {
        width: '100%',
    }

    const onClickDelete = (productId: string) => {
        axios.delete(`http://localhost:8080/api/v1/products/${productId}`);
        axios.get("http://localhost:8080/api/v1/products")
            .then(v => setProducts(v.data));
    }

    const linkButton = {
        color: '#fff',
    }

    return (
        <div style={container}>
            <h1>Grids & Circle</h1>
            <a style={addButton} href={"/new-product"}>
                상품 추가
            </a>
            <table style={card}>
                <thead>
                <tr>
                    <th>상품코드</th>
                    <th>상품명</th>
                    <th>카테고리</th>
                    <th>가격</th>
                    <th>설명</th>
                    <th>생성일</th>
                    <th>수정일</th>
                    <th>상품 수정</th>
                    <th>상품 삭제</th>
                </tr>
                </thead>
                <tbody>
                {products.map(v => (
                    <tr key={v.productId}>
                        <td>{v.productId}</td>
                        <td>{v.productName}</td>
                        <td>{v.category}</td>
                        <td>{v.price}원</td>
                        <td>{v.description}</td>
                        <td>{v.createdAt}</td>
                        <td>{v.updatedAt}</td>
                        <td>
                            <button style={tableButton}><Link style={linkButton} to={`/products/${v.productId}`}>수정</Link></button>
                        </td>
                        <td>
                            <button onClick={() => onClickDelete(v.productId)} style={tableButton}>삭제</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}

export default Products;