import axios from "axios";
import {useEffect, useState} from "react";
import {Navigate} from "react-router-dom";

function UpdateProduct() {
    const [productName, setProductName] = useState("");
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");
    const [back, setBack] = useState(false);
    const productId = window.location.pathname.split("/")[2];

    useEffect(() => {
        axios.get(`http://localhost:8080/api/v1/products/${productId}`).then(v => {
            setProductName(v.data.productName);
            setCategory(v.data.category);
            setPrice(v.data.price);
            setDescription(v.data.description);
        })
    }, [productId]);

    const onClickUpdate = ({productName, category, price, description}: {
        productName: string,
        category: string,
        price: number,
        description: string
    }) => {
        axios.put(`http://localhost:8080/api/v1/products/${productId}`, {
            productName,
            category,
            price,
            description
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
                <label style={fieldLabel} htmlFor="name" className="form-label">상품명</label>
                <input style={input} type="text" id="name" name="productName" value={productName}
                       onChange={(event => setProductName(event.target.value))}/>
            </div>
            <div style={block}>
                <label style={fieldLabel} htmlFor="category">카테고리</label>
                <select style={input} id="category" name="category" className="form-select" value={category}
                        onChange={(event) => setCategory(event.target.value)}>
                    <option selected>Open this select menu</option>
                    <option value="COFFEE_BEAN_PACKAGE">COFFEE BEAN PACKAGE</option>
                </select>
            </div>
            <div style={block}>
                <label style={fieldLabel} htmlFor="price" className="form-label">가격</label>
                <input style={input} type="number" className="form-control" id="price" name="price" value={price}
                       onChange={event => setPrice(parseInt(event.target.value))}/>
            </div>
            <div style={block}>
                <label style={fieldLabel} htmlFor="description" className="form-label">설명</label>
                <textarea style={input} className="form-control" id="description" value={description}
                          onChange={event => setDescription(event.target.value)}></textarea>
            </div>
            <button onClick={() => onClickUpdate({productName, category, price, description})}>
                수정
            </button>
            {back && <Navigate to="/admin/products"/>}
        </div>
    );
}

export default UpdateProduct;