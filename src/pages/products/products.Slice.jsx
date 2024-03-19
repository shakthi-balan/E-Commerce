import {createSlice} from "@reduxjs/toolkit"

const productSlice = createSlice({
    name: "products",
    initialState:{
        isLoading: false,       //"idle", "loading", "completed"
        data: null,
        err: null,
    
    },

    reducers:{
        getProducts:(state) => {
            state.isLoading = true;
        },

        getProductSuccess:(state, actions) => {
            
            state.isLoading = false;
            state.data = actions.payload.results;
            state.err = null;
        },

        getProductFailed: (state, actions) => {
            state.isLoading = false;
            state.data =[];
            state.err = actions.payload.err;
        },
    },
})

export const { getProducts, getProductSuccess, getProductFailed} = productSlice.actions;

export default productSlice.reducer;