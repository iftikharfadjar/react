import React, { Component } from "react";
import ProductList from "./ProductList";
import CategoryNavigation from "./CategoryNavigation";
import { data as rawData } from "../data/placeholderData";

export class Shop extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-3">
            <CategoryNavigation categories={rawData.categories} />
          </div>
          <div className="col-3">
            <ProductList productList={rawData.products} />
          </div>
          <div className="col-6"></div>
        </div>
      </div>
    );
  }
}

export default Shop;
