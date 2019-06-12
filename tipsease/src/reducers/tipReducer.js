import {
    ADD_TIP,
    ADD_TIP_SUCCESS,
    ADD_TIP_FAIL
} from '../actions';

const initialState = {

}

export const tipReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_TIP:
            return {
                ...state
            };
        case ADD_TIP_SUCCESS:
            return {
                ...state
            };
        case ADD_TIP_FAIL:
            return {
                ...state
            };
        default:
            return state;
    }
}