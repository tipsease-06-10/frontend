import axios from 'axios';

//=========== FETCH WORKER LIST DATA ACTIONS ===============

export const FETCH_WORKERS = 'FETCH_WORKERS';
export const FETCH_WORKERS_SUCCESS = 'FETCH_WORKERS_SUCCESS';
export const FETCH_WORKERS_FAIL = 'FETCH_WORKERS_FAIL'

export const getWorkers = () => dispatch => {
    dispatch({ type: FETCH_WORKERS });
    axios
    .get(
        'https://eztip.herokuapp.com/workers/'
    )
    .then(res => {
        dispatch({
            type: FETCH_WORKERS_SUCCESS,
            payload: res.data.results
        });
    })
    .catch(err => {
        dispatch({
            type: FETCH_WORKERS_FAIL,
            payload: err
        });
    });
};

//======== FETCH WORKER DATA ACTIONS =========
export const FETCH_WORKER = 'FETCH_WORKER';
export const FETCH_WORKER_SUCCESS = 'FETCH_WORKER_SUCCESS';
export const FETCH_WORKER_FAIL = 'FETCH_WORKER_FAIL'


//============ LOGIN ACTIONS ================

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';

export const login = () => dispatch => {
    dispatch({ LOGIN_START });
    axios
    .post(
        'https://eztip.herokuapp.com/login/'
    )
    .then(res => {
        console.log(res)
    })
    .catch(err => {
            dispatch({
                type: LOGIN_FAIL,
                payload: err
            });
        });
    };


    //======== ADD TIP ACTIONS =============

    export const ADD_TIP_START = 'ADD_TIP_START';
    export const ADD_TIP_SUCCESS = 'ADD_TIP_SUCCESS';
    export const ADD_TIP_FAIL = 'ADD_TIP_FAIL';