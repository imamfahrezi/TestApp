import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import RecentlyBook from './RecentlyBook';

export default function Recently() {
  return (
    <View style={{paddingLeft: 30}}>
      <Text style={{marginTop: 40, color: '#242126', fontSize: 24}}>
        Recently Viewed
      </Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={{flexDirection: 'row'}}>
          <RecentlyBook />
          <RecentlyBook />
          <RecentlyBook />
        </View>
      </ScrollView>
    </View>
  );
}
