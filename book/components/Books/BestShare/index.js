import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import BestBook from './BestBook';

export default function BestShare() {
  return (
    <View style={{paddingLeft: 30}}>
      <Text style={{marginTop: 40, color: '#242126', fontSize: 24}}>
        Best Share
      </Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={{flexDirection: 'row'}}>
          <BestBook />
          <BestBook />
          <BestBook />
        </View>
      </ScrollView>
    </View>
  );
}
