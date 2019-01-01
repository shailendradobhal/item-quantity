import React, { Component } from 'react';
import Input from './components/Input';
import Button from './components/Button';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: 0
    }
  }

  onHandleAmountChange = (e) => {
    this.setState({
      amount: parseInt(e.target.value)
    });
  }

  onIncrement = (e) => {
    this.setState({
      amount: this.state.amount + 1
    });
  }

  onDecrement = (e) => {
    this.setState({
      amount: this.state.amount > 0 ? this.state.amount - 1 : this.state.amount
    });
  }

  render() {
    return (
      <div className="container mt-5 w-25">
        <Input type="text" amount={this.state.amount} label="amount" onChange={this.onHandleAmountChange} />
        <div className="mt-2 text-center">
          <Button label="Increase Amount" onClick={this.onIncrement}>+</Button>
          <Button label="Decrease Amount" onClick={this.onDecrement}>-</Button>
        </div>
      </div>
    );
  }
}

export default App;
