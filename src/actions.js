// log in
import data from './account';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE';

export const UPDATE_TIME = 'UPDATE_TIME';
export const REMOVE_FEATURE = 'REMOVE_FEATURE';



export function loginAction(username, password){
    console.log('executed');
    let veriUser = "";
    let veriPassword = "";

    for (let i=0; i<data.length;i++) {
        veriUser = data[i].name;
        veriPassword = data[i].password;
        if (veriUser === username && veriPassword === password) {

            return {
                type: LOG_IN_SUCCESS,
            }
        }
    }
    return {
        type: LOG_IN_FAILURE,
    };

}

export function logoutAction(){
    loginAction();
}

