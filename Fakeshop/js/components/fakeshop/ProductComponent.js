import React from 'react';
import { Link } from 'react-router-dom'
import {useSelector} from "react-redux";

const ProductComponent = () => {
    const products = useSelector((state) => state.allProducts.products);
    // const {id, title} = products[0]

    const renderList = products.map((product) => {
        const {id, title, price, image, category} = product;
        return (
            <div className='four column wide' key={id} style={{width: 300, height: 300}}>
                <Link to={`/product/${id}`}>
            <div className='ui link card'>
                <div className='card'>
                    <div className='image'>
                        <img src={image} alt={title} width="200" height="200"/>
                    </div>
                    <div className='content'>
                        <div className='header'>{title}</div>
                        <div className='met price'>$ {price} </div>
                        <div className='meta'>{category}</div>
                    </div>
                </div>
            </div>
                </Link>
        </div>
        );
    });

    return (
        <>{renderList}</>
    );
};

export default ProductComponent;
