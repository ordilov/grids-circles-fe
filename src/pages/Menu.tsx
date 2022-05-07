import {Link} from "react-router-dom";

function Menu() {
    const container = {
        display: 'block',
        'text-align': 'center',
        justifyContent: 'center',
        margin: '0 auto',
    }

    const menuStyle = {
        display: 'inline-block',
        width: '20%',
        height: '80px',
        justifyContent: 'center',
        verticalAlign: 'middle',
        margin: '0 10px',
        'text-align': 'center',
        color: '#fff',
        backgroundColor: 'rgb(52,28,2)',
        borderRadius: '5px',
    }

    return (<div style={container}>
        <h1>Grids & Circles</h1>
        <h2>관리자 메뉴</h2>
        <Link style={menuStyle} to="/admin/products"><h3>상품 관리</h3></Link>
        <Link style={menuStyle} to="/admin/orders"><h3>주문 관리</h3></Link>
    </div>);
}

export default Menu;