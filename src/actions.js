// log in
import data from './account';
import UserApi from './api/mockUserApi';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE';

export const UPDATE_TIME = 'UPDATE_TIME';
export const REMOVE_FEATURE = 'REMOVE_FEATURE';



export function loginAction(username, password){
    console.log('executed');
    let veriUser = "";
    let veriPassword = "";

    let obj = {};

    (async function(username, password) {
        await UserApi.checkLogin(username, password);
        console.log("Yey, story successfully loaded!");
      }(username, password)
        .then(function(result){
            obj = {type:LOG_IN_SUCCESS};
            console.log(obj);
        })
        .catch(function(err){
            obj = {type:LOG_IN_FAILURE};
            console.log(obj);
        })
    );

    UserApi.checkLogin(username, password)




    console.log(obj);
    return obj;

}

export function logoutAction(){
    loginAction();
}

