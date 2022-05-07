import {ProductType} from "../types/product";

export function Product({product, onAddClick}: { product: ProductType, onAddClick: (productId: string) => void }) {
    const productId = product.productId;
    const productName = product.productName;
    const category = product.category;
    const price = product.price;

    console.log(product)

    const handleAddBtnClicked = (c: any) => {
        onAddClick(productId);
    }

    const imgStyle = {
        width: 150,
        height: 150
    }

    return <>
        <div className="col-2"><img style={imgStyle}
                                    src="https://i.imgur.com/HKOFQYa.jpeg"
                                    alt=""/></div>
        <div className="col">
            <div className="row text-muted">{category}</div>
            <div className="row">{productName}</div>
        </div>
        <div className="col text-center price">{price}원</div>
        <div className="col text-end action">
            <button onClick={handleAddBtnClicked}
                    className="btn btn-small btn-outline-dark">추가
            </button>
        </div>
    </>
}