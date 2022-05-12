import React from "react";
import "./products.css";
import { useHistory } from 'react-router-dom';

const Products = ({ productItems, handleAddProduct }) => {
    const history = useHistory();

    return (
        <div className="products">
            <h2 className="mainTitle">Quick and hassle-free shopping</h2>

            <div className="card">
                {productItems.map((productItems) => (
                    <div className="product">
                        <img src={productItems.image} alt={productItems.name} />
                        <div className="productInfo">
                            <p className="infoName">{productItems.name}</p>
                            <p className="infoPrice">${productItems.price}</p>
                            <p className="infoDescription">
                                {productItems.description.substring(0, 100)}...</p>
                            <button className="infoButton" onClick={() => { handleAddProduct(productItems); history.push("/cart"); }}> Add to Cart</button>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Products;