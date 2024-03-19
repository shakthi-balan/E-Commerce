
import HeaderLayout from "./Header.Layout";
// import ProductList from "./productList.Layout";
import Products from "./products/products.test";
import {useDispatch} from "react-redux";
import { useEffect } from "react";
import {getProducts} from "./products/products.Slice";

function Home(){

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch( getProducts() );

    }, [dispatch])      //whenever dispatch is triggered /modified

    return (
        <>
            <div>
                <body>
                    <HeaderLayout/>
                    {/* <ProductList/> */} 
                    
                    <Products/>

                </body>
            </div>
        </>
    )
}

export default Home;

