import React from 'react';
import {View, Text, Image} from 'react-native';

export default function Icon() {
  return (
    <View
      style={{
        maxWidth: 50,
        backgroundColor: 'blue',
        alignItems: 'center',
      }}>
      <Image source={require('../../assets/bg/Search.png')} />
      <Text style={{fontSize: 12}}>Discover</Text>
    </View>
  );
}
