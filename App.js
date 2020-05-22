import React from 'react';
import {Text, View, Image, TextInput} from 'react-native';

export default function App() {
  return (
    <View>
      <View style={{width: 80, height: 80, backgroundColor: 'red'}} />
      <Text>Hello world</Text>
      <Text>Hello world</Text>
      <Text>Hello world</Text>
      <Name />
      <Gambar />
      <TextInput style={{borderWidth: 2}} />
    </View>
  );
}

function Name() {
  return <Text>imam fahrezi hello</Text>;
}

function Gambar() {
  return (
    <Image
      source={{
        uri: 'https://randomuser.me/api/portraits/men/10.jpg',
      }}
      style={{width: 100, height: 100}}
    />
  );
}
