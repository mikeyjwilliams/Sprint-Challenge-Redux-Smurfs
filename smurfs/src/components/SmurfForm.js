import React, { Component } from 'react';

class SmurfForm extends Component {
  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            name="name"
            value="name"
            placeholder="Name..."
            required
          />
          <br />

          <input
            type="number"
            name="age"
            value={0}
            placeholder="Age..."
            required
          />
          <br />

          <input
            type="text"
            name="height"
            value="height"
            placeholder="Height..."
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
