import axios from 'axios';

export const FETCH_WORKER = 'FETCH_CHARACTER';
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