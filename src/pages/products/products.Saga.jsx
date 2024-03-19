import { put, takeLatest } from "redux-saga/effects"
import { getProductFailed, getProductSuccess } from "./products.Slice";
import { getRequest } from "../../service/http.service";

//worker Safa: will be on USER_FETCH_REQUESTED actions

function* getProducts(action){
    try{
        yield console.log("Request iniside getProducts Saga:", action);
        const response = yield getRequest("https://dummyjson.com/products")
        //if no response
        if(!response){  
            yield put( getProductFailed({err: "Failed to load Products"}));
            return ;
        }
        yield put( getProductSuccess( { results: response } ))
    }
    catch(err){
        console.log("Error", err);
        yield put( getProductFailed({ err: "Unable to load products"}));
    }
}

function* getProductsAction(){
    yield takeLatest("products/getProducts", getProducts);      //among all the calls take the last call
}

export default getProductsAction;