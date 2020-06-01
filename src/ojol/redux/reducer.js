import {combineReducers} from 'redux';

const initialState = {
  name: 'imam',
};

const initialStateRegister = {
  title: 'register page',
  desc: 'ini adalah decs register',
};

const initialStateLogin = {
  info: 'masukan password',
  isLogin: true,
};

const RegisterReducer = (state = initialStateRegister, action) => {
  return state;
};

const LoginReducer = (state = initialStateLogin, action) => {
  return state;
};

const reducer = combineReducers({RegisterReducer, LoginReducer});

export default reducer;
