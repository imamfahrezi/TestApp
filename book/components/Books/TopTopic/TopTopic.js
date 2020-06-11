import React from 'react';
import {View, Text, Image} from 'react-native';

export default function TopTopic() {
  return (
    <View style={{marginRight: 17}}>
      <Image
        source={require('../../../assets/img.jpg')}
        style={{width: 90, height: 115, borderRadius: 10}}
      />
      <Text
        style={{
          fontSize: 12,
          color: 'white',
          textAlign: 'center',
          marginTop: 10,
        }}>
        The Fetal
      </Text>
    </View>
  );
}
