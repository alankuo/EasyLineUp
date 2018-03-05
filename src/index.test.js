import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import Login from './components/Login';
import Profile from './components/Profile';
import Register from './components/Register';
import Header from './components/Header';
import Home from './components/Home';
import Status from './components/Status';
function setupHeader(name){
  let props = {
    pageName: name
  };
  return shallow(<Header {...props}/>);
}

function setupStatus(name){
  let props = {
    params: {
      countDown: name
    }
  };
  return shallow(<Status {...props}/>);
}

// Test
describe('Our first test', () => {
  it('should pass', () => {
    expect(true).toEqual(true);
  });
});

// Testing Header
describe('test Header', () => {
  it('should pass for profile', () => {
    const wrapper = setupHeader("profile");
    expect(wrapper.find('.active').find('Link').props().to).toEqual('profile');
  });
  it('should pass for chat', () => {
    const wrapper = setupHeader("chatVal");
    expect(wrapper.find('.active').find('Link').props().to).toEqual('chat');
  });
  it('should pass for home', () => {
    const wrapper = setupHeader("");
    expect(wrapper.find('.active').find('Link').props().to).toEqual('/');
  });
});

//Testing Home
describe('test Home', () => {
  it('should pass for click home', () => {
    const wrapper = shallow(<Home />);
    wrapper.find('button').at(0).simulate('click');
    console.log(wrapper.text());
    expect(true).toEqual(true);
  });
});

//Testing Status
describe('test Status', () => {
  it('should pass for home', () => {
    const wrapper = setupStatus("7:00");
    expect(wrapper.find('.cancelLink').props().to).toEqual('/Confirmation/7:00');
  });

  it('should pass for home', () => {
    const wrapper = setupStatus("12:00");
    expect(wrapper.find('.cancelLink').props().to).toEqual('/Confirmation/12:00');
  });
});

describe('Our first test', () => {
  it('should pass', () => {
    expect(true).toEqual(true);
  });
});

// Testing Login
describe('Our Login test', () => {
  it('testing HTML components', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('h1').text()).toEqual('Welcome to EasyLineUp!!');
    expect(wrapper.find('h2').text()).toEqual('LOG IN');
  });

  it('testing login button', () => {
    const wrapper = mount(<Login />);
    const loginButton = wrapper.find('Link').first();
    expect(loginButton.prop('type')).toBe('submit');
    expect(loginButton.prop('name')).toBe('login_btn');
    //loginButton.simulate('click');
  });

  it('testing state', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.state().routeAddress).toBe("/");
  });
});

// Testing Profile
describe('Our Profile test', () => {
  it('testing HTML components', () => {
    const wrapper = shallow(<Profile />);
    expect(wrapper.find('h2').text()).toEqual('Edit Your Profile');
    expect(wrapper.find('p').text()).toEqual('By submitting this information, you indicate that you agree to EasyLineUp\'s Terms of Service and have read and understood our Privacy Policy.');
  });

  // it('testing profile button', () => {
  //   const wrapper = mount(<Profile />);
  //   const submitButton = wrapper.find('Link').last();
  //   expect(submitButton.prop('type')).toBe('submit');
  //   expect(submitButton.prop('to')).toBe('/profile');
  // });

  it('testing state', () => {
    const wrapper = shallow(<Profile />);
    expect(wrapper.state().routeAddress).toBe("/profile");
  });
});

// Testing Register
describe('Our Register test', () => {
  it('testing HTML components', () => {
    const wrapper = shallow(<Register />);
    expect(wrapper.find('h2').text()).toEqual('Register An Account');
    expect(wrapper.find('p').first().text()).toEqual('By submitting this information, you indicate that you agree to EasyLineUp\'s Terms of Service and have read and understood our Privacy Policy.');
  });

  it('testing profile button', () => {
    const wrapper = mount(<Register />);
    const submitButton = wrapper.find('Link').first();
    expect(submitButton.prop('type')).toBe('submit');
    expect(submitButton.prop('name')).toBe('register_btn');
    expect(submitButton.prop('to')).toBe('/login');
  });

  it('testing state', () => {
    const wrapper = shallow(<Register />);
    expect(wrapper.state().routeAddress).toBe("/login");
  });
});
