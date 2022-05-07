import axios from "axios";
import {useEffect, useState} from "react";
import {Navigate} from "react-router-dom";

function UpdateOrder() {
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [postcode, setPostcode] = useState("");
    const [orderStatus, setOrderStatus] = useState("");
    const [createdAt, setCreatedAt] = useState("");
    const [updatedAt, setUpdatedAt] = useState("");
    const [back, setBack] = useState(false);
    const orderId = window.location.pathname.split("/")[2];

    useEffect(() => {
        axios.get(`http://localhost:8080/api/v1/orders/${orderId}`).then(v => {
            setAddress(v.data.address);
            setEmail(v.data.email);
            setPostcode(v.data.postcode);
            setOrderStatus(v.data.orderStatus);
            setCreatedAt(v.data.createdAt);
            setUpdatedAt(v.data.updatedAt);
        })
    }, [orderId]);

    const onClickUpdateOder = ({orderStatus}: {
        orderStatus: string
    }) => {
        axios.put(`http://localhost:8080/api/v1/orders/${orderId}`, {
            orderStatus
        }).then(() => {
            setBack(true);
        });
    }

    const container = {
        display: 'block',
        'text-align': 'center',
        justifyContent: 'center',
        margin: '0 auto',
    };

    const block = {
        display: 'flex',
        'text-align': 'center',
        justifyContent: 'space-around',
        width: '600px',
        margin: '10px auto',
    }

    const fieldLabel = {
        display: 'inline-block',
        width: '70px',
        'text-align': 'left',
    }

    const input = {
        display: 'inline-block',
        width: '400px',
        'text-align': 'left',
    }

    return (
        <div style={container}>
            <h1>Grids & Circles</h1>
            <h2>상품 수정</h2>
            <div style={block}>
                <label style={fieldLabel} htmlFor="name" className="form-label">email</label>
                <text style={input} type="text" id="name" name="productName">{email} </text>
            </div>
            <div style={block}>
                <label style={fieldLabel} htmlFor="category">주소</label>
                <text style={input} id="address" name="address">{address}</text>
            </div>
            <div style={block}>
                <label style={fieldLabel} htmlFor="price" className="form-label">주소번호</label>
                <text style={input} id="postcode" name="postcode">{postcode}</text>
            </div>
            <div style={block}>
                <label style={fieldLabel} htmlFor="description">주문상태</label>
                <select style={input} id="orderStatus" name="orderStatus" value={orderStatus}
                        onChange={(event) => setOrderStatus(event.target.value)}>
                    <option selected>주문 상태를 선택해주세요</option>
                    <option value="ACCEPTED">ACCEPTED</option>
                    <option value="PAYMENT_CONFIRMED">PAYMENT CONFIRMED</option>
                    <option value="READY_FOR_DELIVERY">READY FOR DELIVERY</option>
                    <option value="SHIPPED">SHIPPED</option>
                    <option value="SETTLED">SETTLED</option>
                    <option value="CANCELED">CANCELED</option>
                </select>
            </div>
            <button onClick={() => onClickUpdateOder({orderStatus})}>
                수정
            </button>
            {back && <Navigate to="/admin/orders"/>}
        </div>
    );
}

export default UpdateOrder;