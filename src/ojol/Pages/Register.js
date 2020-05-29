import React, {useEffect, useState} from 'react';
import {View, Button, Text} from 'react-native';
import Form from '../../components/Form';

const Register = ({navigation}) => {
  const [FormData, setFormData] = useState({
    fullName: 'imam',
    email: '',
    password: '',
  });
  const sendData = () => {
    console.log('kirim data');
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
      <Form placeholder="name" value={FormData.fullName} />
      <Form placeholder="email" />
      <Form placeholder="password" />
      <Button title="Daftar" onPress={sendData} />
    </View>
  );
};

export default Register;
