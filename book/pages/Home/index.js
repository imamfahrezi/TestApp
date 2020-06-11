import React, {useEffect} from 'react';
import {View, Text, ScrollView, TextInput} from 'react-native';
import {HomeHeader} from '../../assets';
import {
  AddTopics,
  Trending,
  BestShare,
  Recently,
  Footer,
  Top,
  Search,
} from '../../components';

export default function Home() {
  useEffect(() => {
    // fetch('https://jsonplaceholder.typicode.com/post/')
    //   .then(response => response.json())
    //   .then(json => console.log(json));
    console.log('hello');
  }, []);
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{flex: 1}}>
        <HomeHeader style={{marginLeft: -130, marginTop: -310}} />
        <View
          style={{
            position: 'absolute',
            paddingHorizontal: 30,
            marginTop: 20,
            width: '100%',
          }}>
          <Search />
          <Text style={{fontSize: 24, marginTop: 20, color: 'white'}}>
            Our Top Picks
          </Text>
        </View>

        {/* CARD */}
        <Top />
        {/* ADD */}
        <AddTopics />
        {/* TRENDING BOOKS */}
        <Trending />
        {/* BEST SHARE */}
        <BestShare />
        {/* Recently Viewed */}
        <Recently />
        {/* Footer */}
        <Footer />
      </View>
    </ScrollView>
  );
}
