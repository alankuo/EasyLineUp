import {
    LOG_IN_SUCCESS,
    LOG_IN_FAILURE,
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
        });
        console.log(a);
        return a;
      }
      case LOG_IN_FAILURE: {
        return Object.assign({},state,{
            verification: false,
        });
      }
      default: {
        return state;
      }
    }
}

export default rootReducer;
