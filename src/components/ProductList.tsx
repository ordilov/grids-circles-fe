import {Product} from "./Product";
import {ProductType} from "../types/product";

export function ProductList({
                                products = [],
                                onAddClick
                            }: { products: ProductType[], onAddClick: (productId: string) => void }) {

    return (
        <>
            <h5><b>상품 목록</b></h5>
            <ul>
                {products.map(v =>
                    <li key={v.productId}>
                        <Product product={v} onAddClick={onAddClick}/>
                    </li>
                )}
            </ul>
        </>
    )
}