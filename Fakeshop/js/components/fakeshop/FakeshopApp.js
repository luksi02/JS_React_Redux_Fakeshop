import React from  'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Header';
import ProductListing from './ProductListing';
import ProductDetails from './ProductDetails';
import ErrorBoundary from './ErrorBoundary';


const FakeshopApp = () => {
    return (
        <ErrorBoundary>
        <div className="App">
            <h1>Hello</h1>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<ProductListing />} />
                    <Route path="/product/:productId" element={<ProductDetails /> } />
                    <Route path="*" element={<h1>404 Route not found!</h1>} />
                </Routes>
            </BrowserRouter>
        </div>
        </ErrorBoundary>
    );
};

export default FakeshopApp;