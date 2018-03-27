import expect from 'expect';
import login from './reducers';
import * as actions from './actions';

describe('User Reducer', () => {
  it('should log in when passed LOG_IN_SUCCESS', () => {
    // arrange
    const initialState = [
    ];

    const parameter = ['zifeng', 'xie'];

    function check(state, action){
      const newState = login(state,action);
      //assert
      console.log('newState: '+JSON.stringify(newState));
      //expect(newState.length).toEqual(2);
      expect(newState.login.verification).toEqual(true);
      expect(newState.login.user).toEqual('zifeng');
    }
    (actions.loginAction(parameter[0], parameter[1]))(check);
    //act
    // const newState = login(initialState, action);


  });

  it('should reset Action when passed RESET_VERIFICATION', () => {
    // arrange
    const initialState = {login:{verification: true,user: undefined}};

    const action = actions.resetAction();

    //act
    const newState = login(initialState, action);
    // console.log(JSON.stringify(newState));
    // console.log(JSON.stringify(newState.login));

    //assert

    expect(newState.login.verification).toEqual(undefined);
    expect(newState.login.user).toEqual(undefined);
  });

  it('should profile Action when passed PROFILE_CHANGE_SUCCESS', () => {
    // arrange
    const initialState = [
    ];

    const parameter = ['zifeng', '1010101', 'alskd@gmail.com'];

    function check(state, action){
      const newState = login(state,action);
      //assert
      console.log('newState: '+JSON.stringify(newState));
      //expect(newState.length).toEqual(2);
      expect(newState.login.success).toEqual(true);
    }
    (actions.loginAction(parameter[0], parameter[1],parameter[2]))(check);
  });

  // it('should update course when passed UPDATE_COURSE_SUCCESS', () => {
  //   // arrange
  //   const initialState = [
  //     {id: 'A', title: 'A'},
  //     {id: 'B', title: 'B'},
  //     {id: 'C', title: 'C'}
  //   ];
  //
  //   const course = {id: 'B', title: 'New Title'};
  //   const action = actions.updateCourseSuccess(course);
  //
  //   // act
  //   const newState = courseReducer(initialState, action);
  //   const updatedCourse = newState.find(a => a.id == course.id);
  //   const untouchedCourse = newState.find(a => a.id == 'A');
  //
  //   // assert
  //   expect(updatedCourse.title).toEqual('New Title');
  //   expect(untouchedCourse.title).toEqual('A');
  //   expect(newState.length).toEqual(3);
  // });
});
