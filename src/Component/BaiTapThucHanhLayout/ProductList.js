import React, { Component } from 'react';
import Product from './Product';

class ProductList extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-4">
                        <Product title="One"/>
                    </div>
                    <div className="col-4">
                        <Product title="Two"/>
                    </div>
                    <div className="col-4">
                        <Product title="Three"/>
                    </div>
                    <div className="col-4">
                        <Product title="Four"/>
                    </div>
                    <div className="col-4">
                        <Product title="Five"/>
                    </div>
                    <div className="col-4">
                        <Product title="Six"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductList;