import axios from 'axios';

export function userSignupRequest(userData) {
    return dispatch => {
        return axios.post('https://eztip.herokuapp.com/workers', userData);
    }
}