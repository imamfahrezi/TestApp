import React from 'react';
import {View, Text, Image} from 'react-native';
import Icon from './Icon';

export default function Footer() {
  return (
    <View
      style={{
        marginTop: 40,
        height: 87,
        backgroundColor: 'red',
        paddingTop: 20,
        paddingLeft: 30,
      }}>
      <View
        style={{
          backgroundColor: 'green',
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}>
        <Icon />
      </View>
    </View>
  );
}
