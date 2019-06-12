import axios from 'axios';

//============================ FETCH_WORKER_DATA ACTIONS

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


//============================ LOGIN ACTIONS 

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';

export const login = res => dispatch => {
    dispatch({ LOGIN_START });
    axios
    .post(
        'https://eztip.herokuapp.com/login/'
    )
    .then(
        console.log(res)
    )
    .catch(err => {
            dispatch({
                type: LOGIN_FAIL,
                payload: err
            });
        });
    };


    //========================