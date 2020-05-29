import React, {useEffect, useState} from 'react';
import {View, Button, Text} from 'react-native';
import Form from '../../components/Form';

const Register = ({navigation}) => {
  const [FormData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
  });
  const sendData = () => {
    console.log('kirim data', FormData);
  };

  const onInputChange = (value, input) => {
    setFormData({
      ...FormData,
      [input]: value,
    });
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
        REGISTER
      </Text>
      <Form
        placeholder="name"
        value={FormData.fullName}
        onChangeText={value => onInputChange(value, 'fullName')}
      />
      <Form
        placeholder="email"
        value={FormData.email}
        onChangeText={value => onInputChange(value, 'email')}
      />
      <Form
        placeholder="password"
        value={FormData.password}
        onChangeText={value => onInputChange(value, 'password')}
        secureTextEntry={true}
      />
      <Button title="Daftar" onPress={sendData} />
    </View>
  );
};

export default Register;
