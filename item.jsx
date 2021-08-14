import React, { Component } from 'react';
import QuantityPicker from './quantityPicker';

import "./item.css"

class Item extends Component {
    state = {  };
    render() {
        return (
            <div className="item">
                <img src="/images/products/img-5.jpg" alt="product"></img>

                <h5>This is the title</h5>

                <label>Total $10.00</label>
                <label>Price $5.00</label>

                <QuantityPicker></QuantityPicker>

                <button className="btn btn-sm btn-info">
                    <i className="fa fa-cart-plus"></i>
                </button>
            </div>
        );
    }
}

export default Item;