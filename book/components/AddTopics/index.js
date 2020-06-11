import React from 'react';
import {View, ScrollView} from 'react-native';
import Topic from './Topic';

export default function AddTopics() {
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <View
        style={{
          paddingHorizontal: 30,
          flexDirection: 'row',
          marginTop: 25,
        }}>
        <Topic />
      </View>
    </ScrollView>
  );
}
