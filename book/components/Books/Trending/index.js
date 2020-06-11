import React from 'react';
import {View, Text} from 'react-native';
import Book from './Book';

export default function Trending() {
  return (
    <View style={{paddingHorizontal: 30}}>
      <Text style={{fontSize: 24, color: '#242126', marginTop: 30}}>
        Trending Books
      </Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
        }}>
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
      </View>
    </View>
  );
}
