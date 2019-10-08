import {
    ADD_TIP,
    ADD_TIP_SUCCESS,
    ADD_TIP_FAIL
} from '../actions';

const initialState = {
    error: null,
    fetching: false
}

export const tipReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_TIP:
            return {
                ...state,
                fetching: true
            };
        case ADD_TIP_SUCCESS:
            return {
                ...state,
                fetching: false
            };
        case ADD_TIP_FAIL:
            return {
                ...state,
                error: action.payload,
                fetching: false
            };
        default:
            return state;
    }
}