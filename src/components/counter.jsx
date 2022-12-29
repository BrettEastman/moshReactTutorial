import React from 'react';

class Counter extends React.Component {
  state = {
    count: 0,
  };

  // **Arrow functions don't rebind the "this" keyword, they inherit. It is a lot cleaner than the constructor/super-with-special-syntax method
  handleIncrement = () => { // in React, you need to tell it what to update with the setState method which is a property of the React.Component
    this.setState({ count: this.state.count + 1}); // now that react knows, at some point, it will schedule a call to the render method. We don't know exactly when, it happens asynchronously.
  }

  render() {
    return (
    <div>
      <span className={this.getBadgeClasses()}>{this.formatCount()}</span><button onClick={this.handleIncrement} className="btn btn-secondary btn-sm">Increment</button>
    </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += (this.state.count === 0) ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? 'Zero' : count;
  }
}

export default Counter;