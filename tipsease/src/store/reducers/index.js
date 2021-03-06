import {
    FETCH_WORKERS,
    FETCH_WORKERS_SUCCESS,
    FETCH_WORKERS_FAIL,
    FETCH_WORKER,
    FETCH_WORKER_SUCCESS,
    FETCH_WORKER_FAIL,
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    CREATE_USER,
    CREATE_USER_SUCCESS,
    CREATE_USER_FAIL
  } from '../actions';

  const initialState = {
      workers: [],
      error: '',
      fetching: false,
      userCreated: false
  };
  export const workerReducer = (state = initialState, action) => {
      switch(action.type) {
          case FETCH_WORKERS:
              return {
               ...state,
               fetching: true
              };
          case FETCH_WORKERS_SUCCESS:
              return {
                ...state,
                   workers: action.payload,
                   error: '',
                   fetching: false
                    };
          case FETCH_WORKERS_FAIL: 
              return {
               ...state,
               error: action.payload,
               fetching: false
               };
          case FETCH_WORKER:
            return {
              ...state,
              fetching: true
            };
            case FETCH_WORKER_SUCCESS:
              return {
                ...state,
                fetching: false
              };
            case FETCH_WORKER_FAIL:
              return {
                ...state,
                error: action.payload,
                fetching: false
              };
              case LOGIN_START:
                return {
                  ...state,
                  fetching: true
                };
                case LOGIN_SUCCESS:
                  return {
                    ...state,
                    workers: action.payload,
                    fetching: false
                  };
                  case LOGIN_FAIL:
                    return {
                      ...state,
                      error: action.payload,
                      fetching: false
                    };
                  case CREATE_USER:
                    return {
                      ...state,
                      error: '',
                      fetching: true
                    };
                  case CREATE_USER_SUCCESS:
                    return {
                      ...state,
                      workers: action.payload,
                      error: '',
                      fetching: false,
                      userCreated: true
                    };
                  case CREATE_USER_FAIL:
                    return {
                      ...state,
                      error: action.payload,
                      fetching: false
                    }
                default:
                  return state;
      }
  };

  export default workerReducer;

 

