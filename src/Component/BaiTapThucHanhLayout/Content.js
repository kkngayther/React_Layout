import React, { Component } from 'react';
import Carousel from './Carousel';
import ProductList from './ProductList';

class Content extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-3">
                        <h2 className="p-1">Shop name</h2>
                        <ul class="list-group text-left text-primary">
                            <li class="list-group-item"><a>Category 1</a></li>
                            <li class="list-group-item"><a>Category 2</a></li>
                            <li class="list-group-item"><a>Category 3</a></li>
                        </ul>
                    </div>
                    <div className="col-9">
                        <Carousel />

                        <ProductList />

                    </div>
                </div>
            </div>
        );
    }
}

export default Content;