import React from 'react';
import {View, Alert} from 'react-native';
import {ActionButton} from '../../components/Button';

const WelcomeAuth = ({navigation}) => {
  const GotoPage = screen => {
    navigation.navigate(screen);
  };
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <ActionButton title="MASUK" onPress={() => GotoPage('Login')} />
      <ActionButton title="DAFTAR" onPress={() => GotoPage('Register')} />
    </View>
  );
};

export default WelcomeAuth;
