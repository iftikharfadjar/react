import React, { Component } from "react";

export class TodoBanner extends Component {
  render() {
    return (
      <h4 className="bg-primary text-white text-center p-2">
        {this.props.name} 's To Do List (
        {this.props.task.filter(item => !item.done).length} Items To Do)
      </h4>
    );
  }
}

export default TodoBanner;
