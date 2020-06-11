import React from 'react';
import {View, Button, Text} from 'react-native';
import Form from '../../components/Form';
import {useSelector, useDispatch} from 'react-redux';
import {setForm} from '../redux';
import {ActionButton} from '../../components/Button';

const Login = ({navigation}) => {
  // memanggil store
  const LoginReducer = useSelector(state => state.LoginReducer);

  const dispatch = useDispatch();
  // const [FormData, setFormData] = useState({
  // fullName: '',
  // email: '',
  // password: '',
  // });
  const sendData = () => {
    console.log('kirim data', LoginReducer.form);
  };

  const onInputChange = (value, inputType) => {
    // setFormData({
    //   ...FormData,
    //   [input]: value,
    // });
    dispatch(setForm(inputType, value));
  };
  return (
    <View style={{flex: 1, padding: 20, justifyContent: 'center'}}>
      <ActionButton
        type="icon"
        name="back"
        onPress={() => alert('hello back')}
      />
      <Text
        style={{
          textAlign: 'center',
          marginBottom: 20,
          fontSize: 20,
          fontWeight: 'bold',
        }}>
        Login {LoginReducer.title}
      </Text>
      <Form
        placeholder="email"
        value={LoginReducer.email}
        onChangeText={value => onInputChange(value, 'email')}
      />
      <Form
        placeholder="password"
        value={LoginReducer.password}
        onChangeText={value => onInputChange(value, 'password')}
        secureTextEntry={true}
      />
      <Button title="Login" onPress={sendData} />
    </View>
  );
};

export default Login;
