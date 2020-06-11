import React from 'react';
import {View, Text, Image} from 'react-native';

export default function BestBook() {
  return (
    <View
      style={{
        maxWidth: 130,
        marginTop: 10,
        marginRight: 25,
      }}>
      <Image
        source={require('../../../assets/img.jpg')}
        style={{
          width: 130,
          height: 200,
          borderRadius: 10,
        }}
      />
      <Text
        style={{
          fontSize: 15,
          color: '#242126',
          textAlign: 'center',
          marginTop: 20,
          marginBottom: 8,
        }}>
        In A Land Of Paper Gods
      </Text>
      <Text style={{fontSize: 11, color: '#212121', textAlign: 'center'}}>
        In A Land Of Paper Gods
      </Text>
    </View>
  );
}
