import {ActionTypes} from '../constants/action-types'
import axios from "axios";
import fakeStoreAPI from "../../apis/fakeStoreAPI";

export const fetchProducts = () => async (dispatch, getState)=> {
        const response = await fakeStoreAPI.get("/products");
        console.log(response)

        dispatch(
            {
                type: ActionTypes.FETCH_PRODUCTS,
                payload: response.data
            });
    };


export const fetchProduct = (id) => async (dispatch, getState)=> {
    const response = await fakeStoreAPI.get(`/products/${id}`);
    console.log(response)

    dispatch(
        {
            type: ActionTypes.SELECTED_PRODUCT,
            payload: response.data
        });
};

export const setProducts = (products) => {
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload: products,
    };
};

export const selectedProduct = (product) => {
    return {
        type: ActionTypes.SELECTED_PRODUCT,
        payload: product,
    };
};

export const removeSelectedProduct = () => {
    return {
        type: ActionTypes.REMOVE_SELECTED_PRODUCT,
    };
};
