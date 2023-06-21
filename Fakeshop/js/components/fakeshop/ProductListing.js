import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import ProductComponent from "./ProductComponent";
import axios from 'axios'
import {setProducts} from "./fakeshop_redux/actions/productActions";

const ProductListing = () => {
    const products = useSelector((state) => state.allProducts.products);
    const dispatch = useDispatch();
    // console.log(products);

    const fetchProducts = async () => {
        const response = await axios
            .get('https://fakestoreapi.com/products')
            .catch((err) => {
                console.log("Error!", err);
            });
        console.log(response.data);
        dispatch(setProducts(response.data))
    };

    useEffect(() => {
        fetchProducts();
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