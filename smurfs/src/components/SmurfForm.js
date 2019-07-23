import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSmurf } from '../actions';

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
      age: '',
      height: ''
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.submitSmurf}>
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
            value={this.state.age}
            placeholder="Age..."
            onChange={this.changeHandler}
            required
          />
          <br />

          <input
            type="text"
            name="height"
            value={this.state.height}
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

const mapDispatchToProps = {
  getSmurf: getSmurf
};

export default connect(
  null,
  mapDispatchToProps
)(SmurfForm);
