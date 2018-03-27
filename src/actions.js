// log in
import data from './account';
import UserApi from './api/mockUserApi';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE';
export const RESET_VERIFICATION = 'RESET_VERIFICATION';
export const PROFILE_CHANGE_SUCCESS = 'PROFILE_CHANGE_SUCCESS';
export const PROFILE_CHANGE_FAILURE = 'PROFILE_CHANGE_FAILURE';

export function loginAction(username, password){
    console.log('executed');
    return function(dispatch){
        return UserApi.checkLogin(username, password)
        .then(function(result){
            dispatch({type: LOG_IN_SUCCESS, user: result});
        })
        .catch(function(err){
            dispatch({type: LOG_IN_FAILURE});
        });
    };

}

export function logoutAction(){
    loginAction();
}

export function resetAction(){
    return {type: RESET_VERIFICATION}
}

export function updateUser(username, phone, email){
  return function(dispatch){
      return UserApi.updateUser(username, phone, email)
      .then(function(result){
          dispatch({type: PROFILE_CHANGE_SUCCESS, username: username, phone: phone, email: email});
      })
      .catch(function(err){
          dispatch({type: PROFILE_CHANGE_FAILURE});
      });
  };
}
