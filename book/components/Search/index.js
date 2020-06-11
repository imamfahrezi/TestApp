import React from 'react';
import {View, TextInput} from 'react-native';

export default function Search() {
  return (
    <View
      style={{
        backgroundColor: 'white',
        borderRadius: 20,
      }}>
      <TextInput placeholder="Search" style={{width: 343, height: 40}} />
    </View>
  );
}
