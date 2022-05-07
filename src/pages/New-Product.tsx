import axios from "axios";
import {useState} from "react";
import {Navigate} from "react-router-dom";

function NewProduct() {
    const [productName, setProductName] = useState("");
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");
    const [back, setBack] = useState(false);

    const onClickAddProduct = ({productName, category, price, description}: {
        productName: string,
        category: string,
        price: number,
        description: string
    }) => {
        axios.post("http://localhost:8080/api/v1/products", {
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
            <h2>상품 추가</h2>
            <div style={block}>
                <label style={fieldLabel} htmlFor="name">상품명</label>
                <input style={input} type="text" id="name" name="productName"
                       onChange={(event => setProductName(event.target.value))}/>
            </div>
            <div style={block}>
                <label style={fieldLabel} htmlFor="category">카테고리</label>
                <select style={input} id="category" name="category"
                        onChange={(event) => setCategory(event.target.value)}>
                    <option selected>Open this select menu</option>
                    <option value="COFFEE_BEAN_PACKAGE">COFFEE BEAN PACKAGE</option>
                </select>
            </div>
            <div style={block}>
                <label style={fieldLabel} htmlFor="price">가격</label>
                <input style={input} type="number" id="price" name="price"
                       onChange={event => setPrice(parseInt(event.target.value))}/>
            </div>
            <div style={block}>
                <label style={fieldLabel} htmlFor="description" className="form-label">설명</label>
                <textarea style={input} id="description"
                          onChange={event => setDescription(event.target.value)}></textarea>
            </div>
            <button onClick={() => onClickAddProduct({productName, category, price, description})}>
                추가
            </button>
            {back && <Navigate to="/admin/products"/>}
        </div>
    );
}

export default NewProduct;