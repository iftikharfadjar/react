import React, { Component } from "react";

export class ProductList extends Component {
  render() {
    return (
      <div>
        <h1>Product List</h1>
        {this.props.productList.map((prod) => (
          <div className="card">
            <button>{prod.name}</button>
          </div>
        ))}
      </div>
    );
  }
}

export default ProductList;
