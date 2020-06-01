import {combineReducers} from 'redux';

const initialState = {
  name: 'imam',
};

const initialStateRegister = {
  form: {
    fullName: '',
    email: '',
    password: '',
  },
  title: 'register page',
  desc: 'ini adalah decs register',
};

const initialStateLogin = {
  info: 'masukan password',
  isLogin: true,
};

const RegisterReducer = (state = initialStateRegister, action) => {
  if (action.type === 'SET_TITLE') {
    return {
      ...state,
      title: 'Register Ganti title',
    };
  }
  if (action.type === 'SET_FORM') {
    return {
      ...state,
      form: {
        ...state.form,
        [action.inputType]: action.inputValue,
      },
    };
  }
  return state;
};

const LoginReducer = (state = initialStateLogin, action) => {
  return state;
};

const reducer = combineReducers({RegisterReducer, LoginReducer});

export default reducer;
