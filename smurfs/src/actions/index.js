/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
import axios from 'axios';

export const GET_SMURFS = 'GET_SMURFS';
export const ADD_SMURFS = 'ADD_SMURFS';
export const GET_SMURF_FAILED = 'GET_SMURF_FAILED';
export const GET_SMURF_START = 'GET_SMURF_START';

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/
export function getSmurfs(smurfs) {
  return {
    type: GET_SMURFS,
    payload: smurfs
  };
}

export function addSmurfs(name, age, height) {
  return {
    type: ADD_SMURFS,
    payload: {
      name,
      age,
      height
    }
  };
}

export function getSmurf(dispatch) {
  dispatch({ type: GET_SMURF_START });

  axios
    .get('http://localhost:3333/smurfs')
    .then(res => {
      console.log(res.data);
      dispatch({ type: GET_SMURFS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: GET_SMURF_FAILED, payload: err.response.data });
    });
}
