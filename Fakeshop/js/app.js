import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import {Provider} from "react-redux";

// Fakeshop
import store from './redux/store'
import FakeshopCart from "./components/FakeshopCart"

const Start = () => (
    <div >
        <Provider store={store}>
            <FakeshopCart/>
        </Provider>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(<Start />)