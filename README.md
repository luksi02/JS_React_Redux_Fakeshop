Introduction

The reducers module provides a combined root reducer for managing state related to products in a Redux store. Redux is a predictable state container for JavaScript applications, and reducers are functions that handle state changes based on dispatched actions.

In this documentation, we will discuss the following:

    The reducers module, which contains the combined root reducer.
    The productReducer module, which manages the state related to the list of products fetched from an external data source.
    The selectedProductReducer module, which manages the state of a single selected product, used to display detailed information about that product.

Installation

Before using the reducers module, ensure you have Redux already installed in your project.


npm install redux

reducers.js
Introduction

The reducers.js file contains a root reducer that combines two individual reducers, productReducer and selectedProductReducer, into a single object. This combined root reducer is used to manage the overall state of the application related to products.
Import Statements

javascript

import { combineReducers } from "redux";
import { productReducer, selectedProductReducer } from "./productReducer";

The combineReducers function is imported from the Redux library to combine individual reducers. The productReducer and selectedProductReducer are imported from the productReducer.js module.
Combined Root Reducer

javascript

const reducers = combineReducers({
    allProducts: productReducer,
    product: selectedProductReducer,
});

export default reducers;

The reducers constant holds the combined root reducer. The combineReducers function takes an object as an argument, where each key represents a specific slice of the state and its corresponding reducer function. In this case, we have two keys: allProducts and product. The productReducer is responsible for managing the allProducts state, which holds the list of products fetched from the data source, while the selectedProductReducer is responsible for managing the product state, which holds the selected product for detailed display.
productReducer.js
Introduction

The productReducer.js file contains the reducer function responsible for managing the state related to the list of products fetched from an external data source.
Import Statements

javascript

import { ActionTypes } from "../constants/action-types";

The ActionTypes constant is imported from the "../constants/action-types" module. This constant holds action type strings that are used to identify different actions dispatched to the reducer.
Initial State

javascript

const initialState = {
    products: []
};

The initialState constant represents the initial state for the productReducer. It contains a products array that is initially set to an empty array.
Reducer Function

javascript

export const productReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.FETCH_PRODUCTS:
            return { ...state, products: payload };
        default:
            return state;
    }
};

The productReducer function is a pure function that takes the current state (state) and an action ({ type, payload }) as arguments. The action contains a type property that identifies the type of action and a payload property that carries any additional data required for the action.
Actions and State Updates

    FETCH_PRODUCTS:
        Action: { type: ActionTypes.FETCH_PRODUCTS, payload: productsArray }
        Description: This action is dispatched when new products are fetched from the data source.
        State Update: The products array in the state is updated with the new productsArray.

    Default Case:
        Description: If no matching action type is found, the reducer returns the current state without any changes.

selectedProductReducer.js
Introduction

The selectedProductReducer.js file contains the reducer function responsible for managing the state of a single selected product, used to display detailed information about that product.
Import Statements

javascript

import { ActionTypes } from "../constants/action-types";

The ActionTypes constant is imported from the "../constants/action-types" module. This constant holds action type strings that are used to identify different actions dispatched to the reducer.
Initial State

javascript

const initialState = {};

The initialState constant represents the initial state for the selectedProductReducer. It is an empty object, indicating that no product is currently selected.
Reducer Function

javascript

export const selectedProductReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case ActionTypes.SELECTED_PRODUCT:
            return { ...state, ...payload };
        case ActionTypes.REMOVE_SELECTED_PRODUCT:
            return {};
        default:
            return state;
    }
};

The selectedProductReducer function is a pure function that takes the current state (state) and an action ({ type, payload }) as arguments. The action contains a type property that identifies the type of action and a payload property that carries any additional data required for the action.
Actions and State Updates

    SELECTED_PRODUCT:
        Action: { type: ActionTypes.SELECTED_PRODUCT, payload: productData }
        Description: This action is dispatched when a user selects a specific product for detailed information.
        State Update: The state is updated with the productData, effectively selecting the product.

    REMOVE_SELECTED_PRODUCT:
        Action: { type: ActionTypes.REMOVE_SELECTED_PRODUCT }
        Description: This action is dispatched when a user navigates away from the detailed product view or performs an action that requires deselecting the product.
        State Update: The state is reset to an empty object, removing the selected product.

    Default Case:
        Description: If no matching action type is found, the reducer returns the current state without any changes.

Conclusion

The reducers module provides a combined root reducer that combines the productReducer and selectedProductReducer to manage state related to products in your Redux application. The productReducer handles the list of products fetched from an external data source, while the selectedProductReducer manages the state of a single selected product. By using the combined root reducer, you can create a single source of truth for your Redux store's state, ensuring seamless state management and data flow in your application.
