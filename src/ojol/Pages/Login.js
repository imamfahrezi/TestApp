import React from 'react';
import {View, Button} from 'react-native';

const Login = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button
        title="Go to Register"
        onPress={() => navigation.push('Register')}
      />
    </View>
  );
};

export default Login;
