/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
import axios from 'axios';

export const GET_SMURFS = 'GET_SMURFS';
export const ADD_SMURFS = 'ADD_SMURFS';

export const GET_SMURFS_FAILED = 'GET_SMURFS_FAILED';
export const GET_SMURFS_START = 'GET_SMURFS_START';
export const GET_SMURFS_SUCCESS = 'GET_SMURFS_SUCCESS';
export const GET_SMURFS_FETCHING = 'GET_SMURFS_FETCHING';

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

export function getSmurf(name, age, height) {
  dispatch({ type: GET_SMURFS_START });
  console.log('smurfs');
  axios
    .post('http://localhost:3333/smurfs/', { name, age, height })
    .then(res => {
      console.log(res.data);
      dispatch({ type: GET_SMURFS_SUCCESS });
    })
    .catch(err => {
      dispatch({ type: GET_SMURFS_FAILED, payload: err.response.data });
    });
}
