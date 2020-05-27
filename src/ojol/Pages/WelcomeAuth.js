import React from 'react';
import {View} from 'react-native';
import {ActionButton} from '../../components/Button';

const WelcomeAuth = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <ActionButton title="MASUK" />
      <ActionButton title="DAFTAR" />
    </View>
  );
};

export default WelcomeAuth;
