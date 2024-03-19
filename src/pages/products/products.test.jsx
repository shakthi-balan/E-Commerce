
import { useSelector} from "react-redux"; //useDispatch to send to store, useSelector for reading frm store


import "./productList.Layout.css"
const Products = () => {
    const { isLoading, data, err}  = useSelector((state) => state.products);
    

    console.log({ isLoading , data, err});
    // const dataParsed = data.products;
    // console.log('dataParsed', dataParsed);
    if( isLoading ){
        return <div className="loader"></div>   
    }
    if( !isLoading && data ){
        console.log("data :", data);
    }

    

    const handleAddToCart = (e) => {
        const addCart = e.target.id;
        console.log( "Item to Cart", addCart);
    }

    return (
        <>
            <div className = "product-listing">
              
                {
                    Array.isArray(data) && 
                        data.map((item) => {
                            return (
                                <div key = {item.id} className = "product-item">
                                    <img src = {item.thumbnail}></img>
                                    <p>{item.title}</p>
                                    <button 
                                        className = "addToCartButton"
                                        name  = { item.id }
                                        onClick = {handleAddToCart}>
                                            Add To Cart
                                        </button>
                                </div>
                            )
                        })
                }
            </div>
        </>
    )
    
}

export default Products;