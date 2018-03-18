import {
    LOG_IN_SUCCESS,
    LOG_IN_FAILURE,
    RESET_VERIFICATION,
} from './actions';
import { combineReducers } from 'redux';


const rootReducer = combineReducers({
    login,
});

function login(state = {}, action) {
    switch (action.type) {
      case LOG_IN_SUCCESS: {

        const a = Object.assign({},state,{
            verification: true,
            user: action.user,
        });
        return a;
      }
      case LOG_IN_FAILURE: {

        return Object.assign({},state,{
            verification: false,
            user: null,
        });
      }
      case RESET_VERIFICATION: {
        return Object.assign({},state,{
            verification: undefined,
            user: null,
        });
      }
      default: {
        return state;
      }
    }
}

export default rootReducer;
