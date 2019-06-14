import axios from 'axios';

//=========== FETCH WORKER LIST DATA ACTIONS ===============

export const FETCH_WORKERS = 'FETCH_WORKERS';
export const FETCH_WORKERS_SUCCESS = 'FETCH_WORKERS_SUCCESS';
export const FETCH_WORKERS_FAIL = 'FETCH_WORKERS_FAIL';

export const getWorkers = () => dispatch => {
    dispatch({ type: FETCH_WORKERS });
    axios
    .get(
        'https://eztip.herokuapp.com/workers/', {
            headers: { Authorization: localStorage.getItem('token') }
        }
    )
    .then(res => {
        dispatch({
            type: FETCH_WORKERS_SUCCESS,
            payload: res.data
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

export const getWorker = id => dispatch => {
    dispatch({ type: FETCH_WORKER });
    axios
    .get(
        `https://eztip.herokuapp.com/workers/${id}`
    )
    .then(res => {
        dispatch({
            type: FETCH_WORKER_SUCCESS,
            payload: res.data
        })
    .catch(err => {
        console.log(err)
        dispatch({
            type: FETCH_WORKER_FAIL,
            payload: err
        });
    })
  });
};

//============ LOGIN ACTIONS ================

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';

export const login = creds => dispatch => {
    dispatch({ type: LOGIN_START });
    return axios
    .post(
        'https://eztip.herokuapp.com/login/', creds
    )
    .then(res => {
        localStorage.setItem('token', res.data.token)
      })
    };

    //======== ADD TIP ACTIONS =============

    export const ADD_TIP_START = 'ADD_TIP_START';
    export const ADD_TIP_SUCCESS = 'ADD_TIP_SUCCESS';
    export const ADD_TIP_FAIL = 'ADD_TIP_FAIL';

    export const addTip = () => dispatch => {
        dispatch({ ADD_TIP_START });
        axios
        .post(
            'https://eztip.herokuapp/tips/'
        )
        .then(res => {
            dispatch({
                type: ADD_TIP_SUCCESS,
                payload: res.data
            })
            .catch(err => {
                console.log(err)
                dispatch({
                    type: ADD_TIP_FAIL,
                    payload: err
                });
            });
        });
    };