import axios from 'axios';

//=========== FETCH_WORKER_DATA ACTIONS ===============

export const FETCH_WORKER = 'FETCH_WORKER';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAIL = 'FETCH_FAIL'

export const getWorkers = () => dispatch => {
    dispatch({ type: FETCH_WORKER });
    axios
    .get(
        'https://eztip.herokuapp.com/workers/'
    )
    .then(res => {
        dispatch({
            type: FETCH_SUCCESS,
            payload: res.data.results
        });
    })
    .catch(err => {
        dispatch({
            type: FETCH_FAIL,
            payload: err
        });
    });
};


//============ LOGIN ACTIONS ================

// export const LOGIN_START = 'LOGIN_START';
// export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
// export const LOGIN_FAIL = 'LOGIN_FAIL';

// export const login = () => dispatch => {
//     dispatch({ LOGIN_START });
//     axios
//     .post(
//         'https://eztip.herokuapp.com/login/'
//     )
//     .then(res => {
//         console.log(res)
//     })
//     .catch(err => {
//             dispatch({
//                 type: LOGIN_FAIL,
//                 payload: err
//             });
//         });
//     };

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

export function login() {
  return {
    type: LOGIN_SUCCESS,
    payload: {
      token:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
    }
  };
}



    //============