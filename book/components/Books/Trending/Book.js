import React from 'react';
import {View, Image} from 'react-native';

export default function Book() {
  return (
    <View>
      <Image
        source={require('../../../assets/img.jpg')}
        style={{width: 105, height: 170, borderRadius: 5, marginTop: 14}}
      />
    </View>
  );
}
