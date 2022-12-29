import React from 'react';

class Counter extends React.Component {
  state = {
    count: 0,
    tags: []
  };

  // **FYI - this is the longer, classic way, using bind. For arrow function version, see next commit

  constructor() { // Because we called the constructor of the child class, Counter, first we have to call the constructor of the parent class, React.Component, using the "super" keyword. In other words, we need to have super in there in order to have 'this' be defined as the Counter
    super();
    this.handleIncrement = this.handleIncrement.bind(this); // the bind method will make it to where, when we use the handleIncrement method, it will return a new instance of the handleIncrement function and in that new instance, this will always refer to the current object, rather than the window object.
  }

  handleIncrement() {
    console.log('clicked!', this)
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