import React from 'react';
import { connect } from 'react-redux';

function Smurfs(props) {
  return (
    <div>
      <div>
        {/* <h2>{smurf.name}</h2> */}
        {/* <h3>{smurf.age}</h3> */}
        {/* <h3>{smurf.height}</h3> */}
      </div>
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
