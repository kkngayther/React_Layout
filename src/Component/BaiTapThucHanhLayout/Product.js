import React, { Component } from 'react';

class Product extends Component {
    render() {
        return (
            <div>
                <div className="card bg-light mt-2 mb-2">
                    <img className="card-img-top" src="http://placehold.it/700x400" alt />
                    <div className="card-body text-left">
                        <h4 className="card-title text-primary font-weight-bold">Item {this.props.title}</h4>
                        <p className="card-text font-weight-bold">$24.99</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Product;