import React from 'react';

class Counter extends React.Component {
  state = {
    count: 0,
  };

  handleIncrement = () => {
    this.setState({count: this.state.count + 1});
  };

  render() {
    return ( // use a wrapper arrow function with handleIncrement to be able to add an argument to it. For this example, we are hard coding "id: 1", but it could be the results from mapping over data.
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
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