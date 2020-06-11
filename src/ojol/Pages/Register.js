import React from 'react';
import {View, Button, Text} from 'react-native';
import Form from '../../components/Form';
import {useSelector, useDispatch} from 'react-redux';
import {setForm} from '../redux';

const Register = ({navigation}) => {
  // memanggil store
  const RegisterReducer = useSelector(state => state.RegisterReducer);

  const dispatch = useDispatch();
  // const [FormData, setFormData] = useState({
  // fullName: '',
  // email: '',
  // password: '',
  // });
  const sendData = () => {
    console.log('kirim data', RegisterReducer.form);
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
      <Text
        style={{
          textAlign: 'center',
          marginBottom: 20,
          fontSize: 20,
          fontWeight: 'bold',
        }}>
        REGISTER {RegisterReducer.title}
      </Text>
      <Form
        placeholder="name"
        value={RegisterReducer.fullName}
        onChangeText={value => onInputChange(value, 'fullName')}
      />
      <Form
        placeholder="email"
        value={RegisterReducer.email}
        onChangeText={value => onInputChange(value, 'email')}
      />
      <Form
        placeholder="password"
        value={RegisterReducer.password}
        onChangeText={value => onInputChange(value, 'password')}
        secureTextEntry={true}
      />
      <Button title="Daftar" onPress={sendData} />
    </View>
  );
};

export default Register;
