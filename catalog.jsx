import React, { Component } from 'react';
import QuantityPicker from "./item";

class Catalog extends Component {
    state = {};
    render() {
        return (
            <div className="catalog">
                <h3>Our amazing catalog</h3>

                <Item></Item>
                <Item></Item>
                <Item></Item>
                <Item></Item>
                <Item></Item>
            </div>
        );
    }
    //best place to load data from server
    //executed after the initial render
    componentDidMount() {

    }
}

export default Catalog;
