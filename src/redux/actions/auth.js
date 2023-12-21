import axios, * as others from 'axios';
import * as types from './types';
import {Platform} from 'react-native';
import {baseUrl} from '../../constants/constants.js';

export const userLogin = (data, success, error) => {
  return async dispatch => {
    try {
      var config = {
        method: 'post',
        url: `${baseUrl}teammember/loginteammember`,
        headers: {
          'Content-Type': 'application/json',
        },
        data,
      };

      axios(config)
        .then(function (response) {
          console.log(response.data);
          if (response.data.success) {
            console.log(response.data);
            dispatch(authLoad(false));
            dispatch(loginSuccess(response.data));
            success(response.data);
          } else {
            error(response.data);
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    } catch (err) {
      dispatch(authLoad(false));
      console.log(err);
    }
  };
};
export const registerUser = (data, success, error) => {
  return async dispatch => {
    try {
      var config = {
        method: 'post',
        url: `${baseUrl}teammember/registerteammember`,
        headers: {
          'Content-Type': 'application/json',
        },
        data: data,
      };

      axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data));
          console.log(response.data);
          if (response.data.success) {
            console.log(response.data);
            dispatch(authLoad(false));
            dispatch(loginSuccess(response.data));
            success(response.data);
          } else {
            error(response.data);
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    } catch (err) {
      dispatch(authLoad(false));
      console.log(err);
    }
  };
};
export const getConfirmationCode = (data, success, error) => {
  return async dispatch => {
    try {
      var config = {
        method: 'post',
        url: `${baseUrl}teammember/newotp`,
        headers: {
          'Content-Type': 'application/json',
        },
        data: data,
      };

      axios(config)
        .then(function (response) {
          if (response.data.success) {
            console.log(response.data);
            dispatch(authLoad(false));
            success(response.data);
          } else {
            error(response.data);
          }
        })
        .catch(function (error) {
          dispatch(authLoad(false));
          console.log(error);
          error(error);
        });
    } catch (err) {
      dispatch(authLoad(false));
      console.log(err);
    }
  };
};

export const ConfirmCode = (data, success, error) => {
  return async dispatch => {
    try {
      var config = {
        method: 'post',
        url: `${baseUrl}teammember/emailverify`,
        headers: {
          'Content-Type': 'application/json',
        },
        data: data,
      };

      axios(config)
        .then(function (response) {
          if (response.data.success) {
            console.log(response.data);
            dispatch(authLoad(false));
            success(response.data);
          } else {
            error(response.data);
          }
        })
        .catch(function (error) {
          dispatch(authLoad(false));
          console.log(error);
          error(error);
        });
    } catch (err) {
      dispatch(authLoad(false));
      console.log(err);
    }
  };
};

export const authLoad = data => {
  return {
    type: types.AUTH_LOADING,
    payload: data,
  };
};

export const signupSuccess = data => {
  return {
    type: types.SIGNUP_SUCCESS,
    payload: data,
  };
};

export const loginSuccess = data => {
  return {
    type: types.LOGIN_SUCCESS,
    payload: data,
  };
};
export const logOut = data => {
  return {
    type: types.LOG_OUT,
    payload: data,
  };
};
