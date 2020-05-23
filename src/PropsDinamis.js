import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';

const Story = props => {
  return (
    <View
      style={{
        marginRight: 20,
        alignItems: 'center',
      }}>
      <Image
        source={{uri: props.gambar}}
        style={{width: 100, height: 100, borderRadius: 50, marginRight: 30}}
      />
      <Text style={{textAlign: 'center', maxWidth: 50}}>{props.name}</Text>
    </View>
  );
};

const PropsDinamis = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
      }}>
      {/* <Text>latihan PropsDinamis</Text> */}
      <ScrollView horizontal>
        <Story
          name="ihab"
          gambar="https://randomuser.me/api/portraits/men/10.jpg"
        />
        <Story
          name="kamil"
          gambar="https://randomuser.me/api/portraits/men/10.jpg"
        />
        <Story
          name="latan"
          gambar="https://randomuser.me/api/portraits/men/10.jpg"
        />
      </ScrollView>
    </View>
  );
};

export default PropsDinamis;
