import { useState, useEffect } from "react";
import "./productList.Layout.css"

function ProductList() {

    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        //fetch("https://dummyjson.com/products")
        fetch("https://dummyjson.com/products")
        .then((data) => data.json() )
        .then((data) => {
            setProducts(data.products);
            
        })
        .catch((err) => {
            console.log("Error: ", err);
            setProducts([]);
        })
    }, [] );

    const handleAddToCart = (e) => {
        const tgt = e.target.name;
        console.log(tgt);
    }
    console.log("products", products);  

    return(
        <>
            <div className = "product-listing">

         
            {
                products.map((product) => {
                    return(
                        <>
                            <div className = "product-item">
                                <h4 key = { product.id}> {product.title}</h4>
                                <img src= {product.thumbnail}></img>
                                <button 
                                    className = "addToCartButton" 
                                    name = {product.id} 
                                    onClick = {handleAddToCart} >
                                    Add
                                </button>
                            </div>
                        </>
                    )
                })
            }
            </div>
        </>
    )
}

export default ProductList;



