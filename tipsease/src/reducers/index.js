import {
    FETCH_WORKER,
    FETCH_SUCCESS,
    FETCH_FAIL
  } from "../actions";

  const initialState = {
      workers: [],
      error: null,
      fetching: false
  };
  export const workerReducer = (state = initialState, action) => {
      switch(action.type) {
          case FETCH_WORKER:
              return {
                  ...state,
                  fetching: true
              };
              case FETCH_SUCCESS:
                    return {
                      ...state,
                      workers: action.payload,
                      fetching: false
                    };
                    case FETCH_FAIL: 
                    return {
                      ...state,
                      error: action.payload,
                      fetching: false
                    };
                default:
                  return state;
      }
  };

  export default workerReducer;