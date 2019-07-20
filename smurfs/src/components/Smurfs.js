import React from 'react';
import { connect } from 'react-redux';

function Smurfs(props) {
  return (
    <div>
      {props.map.smurfs(smurf => {
        return (
          <div>
            <h2>{props.smurf.name}</h2>
            <h3>{props.smurf.age}</h3>
            <h3>{props.smurf.height}</h3>
          </div>
        );
      })}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    name: state.name,
    age: state.age,
    height: state.height
  };
};

export default connect(
  mapStateToProps,
  {}
)(Smurfs);
