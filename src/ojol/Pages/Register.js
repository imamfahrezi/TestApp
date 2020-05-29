import React from 'react';
import {View, Button, Text} from 'react-native';
import Form from '../../components/Form';

const Register = ({navigation}) => {
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
      <Form placeholder="name" />
      <Form placeholder="email" />
      <Form placeholder="password" />
    </View>
  );
};

export default Register;
