import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSmurf } from '../actions/index';

class SmurfForm extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      age: 0,
      height: ''
    };
  }

  changeHandler = e => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  submitSmurf = e => {
    e.preventDefault();
    const { name, age, height } = this.state;

    this.props.getSmurf(name, age, height);

    this.setState({
      name: '',
      age: 0,
      height: ''
    });
  };

  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            name="name"
            value={this.state.name}
            placeholder="Name..."
            onChange={this.changeHandler}
            required
          />
          <br />

          <input
            type="number"
            name="age"
            value={0}
            placeholder="Age..."
            onChange={this.changeHandler}
            required
          />
          <br />

          <input
            type="text"
            name="height"
            value="height"
            placeholder="Height..."
            onChange={this.changeHandler}
            required
          />
          <br />

          <button type="submit">Add Smurf</button>
        </form>
      </div>
    );
  }
}
export default SmurfForm;
