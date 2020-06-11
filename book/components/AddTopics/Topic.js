import React from 'react';
import {View, Text, Image} from 'react-native';

export default function Topic() {
  return (
    <View style={{marginRight: 17}}>
      <Image
        source={require('../../assets/bg/add.png')}
        style={{width: 70, height: 70, borderRadius: 50}}
      />
      <Text
        style={{
          textAlign: 'center',
          fontSize: 12,
          marginTop: 4,
          color: '#707070',
        }}>
        ADD
      </Text>
    </View>
  );
}
