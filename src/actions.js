// log in
import data from './account';
import UserApi from './api/mockUserApi';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE';
export const RESET_VERIFICATION = 'RESET_VERIFICATION';
export const UPDATE_TIME = 'UPDATE_TIME';
export const REMOVE_FEATURE = 'REMOVE_FEATURE';

export function loginAction(username, password){
    console.log('executed');
    let veriUser = "";
    let veriPassword = "";

    let obj = {};

    return function(dispatch){
        return UserApi.checkLogin(username, password)
        .then(function(result){
            dispatch({type: LOG_IN_SUCCESS, user: result});
        })
        .catch(function(err){
            dispatch({type: LOG_IN_FAILURE});
        });
    }


}

export function logoutAction(){
    loginAction();
}

export function resetAction(){
    return {type: RESET_VERIFICATION}
}