import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import ProductComponent from "./ProductComponent";
// import axios from 'axios' ---[LG:] no longer needed, redux-thunk deals with it
import {setProducts, fetchProducts} from "../redux/actions/productActions";

const ProductListing = () => {
    const products = useSelector((state) => state.allProducts.products);
    const dispatch = useDispatch();
    // console.log(products);

    // '[LG]: fetchProducts deals with it now!'
    // const fetchProducts = async () => {
    //     const response = await axios
    //         .get('https://fakestoreapi.com/products')
    //         .catch((err) => {
    //             console.log("Error!", err);
    //         });
    //     console.log(response.data);
    //     dispatch(setProducts(response.data))
    // };

    useEffect(() => {
        dispatch(fetchProducts());
    }, []);

    console.log("Products: ,", products)

    return (
        <div className="ui grid container">
            {/*<h1>ProductListing</h1>*/}
            {/*<hr></hr>*/}
            <ProductComponent />
        </div>
    );
};

export default ProductListing;