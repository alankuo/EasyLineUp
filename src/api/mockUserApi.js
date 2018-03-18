import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const users = [
  {
    first_name: 'Alan',
    last_name: 'Kuo',
    username: 'alan',
    password: 'kuo',
    email: 'lala@gmail.com',
    phone: '111-111-1111'
  },
  {
    first_name: 'zifeng',
    last_name: 'xie',
    username: 'zifeng',
    password: 'xie',
    email: 'lalala@gmail.com',
    phone: '111-111-1111'
  },
  {
    first_name: 'chaolei',
    last_name: 'hua',
    username: 'chaolei',
    password: 'hua',
    email: 'lalalala@gmail.com',
    phone: '111-111-1111'
  }
];

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (user) => {
  return user.firstName.toLowerCase() + '-' + user.lastName.toLowerCase();
};

class UserApi {

  static createUser(first_name, last_name, username, password, email, phone) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfUserToUpdate = users.findIndex(user => {
            user.username == username;
        });

        if(indexOfUserToUpdate == -1) {
            reject(`username ${username} existed. Please change another one`);
        } else {
            user = {first_name, last_name, username, password, email, phone};
            users.push(user);
            resolve(Object.assign([], users));
        }

      }, delay);
    });
  }

  static saveUser(user) {
	user = Object.assign({}, user); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minUserNameLength = 3;
        if (user.firstName.length < minUserNameLength) {
          reject(`First Name must be at least ${minUserNameLength} characters.`);
        }

        if (user.lastName.length < minUserNameLength) {
          reject(`Last Name must be at least ${minUserNameLength} characters.`);
        }

        if (user.id) {
          const existingUserIndex = users.findIndex(a => a.id == user.id);
          users.splice(existingUserIndex, 1, user);
        } else {
          user.id = generateId(user);
          users.push(user);
        }

        resolve(user);
      }, delay);
    });
  }

  static checkLogin(username,password){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
          const indexOfUserToUpdate = users.findIndex(user => {
            return user.username === username;
          });

          if(indexOfUserToUpdate != -1){
            if(users[indexOfUserToUpdate].password === password){
                resolve(users[indexOfUserToUpdate]);
            }
          }
          reject('user password not match');
        }, delay);
    });
  }

  static updateUser(username, email, phone) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfUserToUpdate = users.findIndex(user => {
            return user.username == username;
        });
        if(indexOfUserToUpdate != -1){
            users[indexOfUserToUpdate].email = email;
            users[indexOfUserToUpdate].phone = phone;
            resolve();
        }
        reject('no users found');

        //users.splice(indexOfUserToUpdate, 1);
      }, delay);
    });
  }
}

export default UserApi;
