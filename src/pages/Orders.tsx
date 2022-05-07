import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import {OrderType} from "../types/order";

function Orders() {
    const [orders, setOrders] = useState<OrderType[]>([]);

    useEffect(() => {
        axios.get("http://localhost:8080/api/v1/orders")
            .then(v => setOrders(v.data))
    }, [orders]);

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

    const linkButton = {
        color: '#fff',
    }

    return (
        <div style={container}>
            <h1>Grids & Circle</h1>
            <a style={addButton} href={"/new-order"}>
                주문 추가
            </a>
            <table style={card}>
                <thead>
                <tr>
                    <th>주문코드</th>
                    <th>주문자</th>
                    <th>주소</th>
                    <th>주소번호</th>
                    <th>주문상태</th>
                    <th>주문일</th>
                    <th>수정일</th>
                </tr>
                </thead>
                <tbody>
                {orders.map(v => (
                    <tr key={v.orderId}>
                        <td>{v.orderId}</td>
                        <td>{v.email}</td>
                        <td>{v.address}</td>
                        <td>{v.postcode}</td>
                        <td>{v.orderStatus}</td>
                        <td>{v.createdAt}</td>
                        <td>{v.updatedAt}</td>
                        <td>
                            <button style={tableButton}><Link style={linkButton} to={`/orders/${v.orderId}`}>수정</Link></button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}

export default Orders;