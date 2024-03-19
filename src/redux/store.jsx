import { configureStore } from "@reduxjs/toolkit"

import productReducer from "../pages/products/products.Slice";
//import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import getProductsAction from "../pages/products/products.Saga";

const sagaMiddleware = createSagaMiddleware();


const store = configureStore({
    reducer: {
        products: productReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ thunk: false}).concat(sagaMiddleware),
});

sagaMiddleware.run(getProductsAction);

export default store;