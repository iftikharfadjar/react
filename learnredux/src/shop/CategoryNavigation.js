import React, { Component } from "react";

export class CategoryNavigation extends Component {
  render() {
    return (
      <div>
        <h1>Category</h1>
        <button className="btn btn-secondary btn-block">All</button>
        {this.props.categories.map((cat) => (
          <button className="btn btn-secondary btn-block">{cat}</button>
        ))}
      </div>
    );
  }
}

export default CategoryNavigation;
