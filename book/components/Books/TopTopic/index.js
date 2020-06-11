import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import TopTopic from './TopTopic';

export default function Top() {
  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={{position: 'absolute', top: 155}}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <TopTopic />
        <TopTopic />
        <TopTopic />
        <TopTopic />
      </View>
    </ScrollView>
  );
}
