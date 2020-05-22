import React from 'react';
import {Text, View, Image} from 'react-native';

function FlexBox() {
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: 'gray',
          alignItems: 'center',
        }}>
        <View style={{backgroundColor: 'red', width: 50, height: 50}} />
        <View style={{backgroundColor: 'green', flex: 1, height: 100}} />
        <View style={{backgroundColor: 'blue', flex: 1, height: 150}} />
        <View style={{backgroundColor: 'yellow', flex: 1, height: 200}} />
      </View>

      <View
        style={{
          flexDirection: 'row',
          backgroundColor: 'gray',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          marginTop: 30,
        }}>
        <View style={{backgroundColor: 'red', width: 50, height: 50}} />
        <View style={{backgroundColor: 'green', width: 50, height: 50}} />
        <View style={{backgroundColor: 'blue', width: 50, height: 50}} />
        <View style={{backgroundColor: 'yellow', width: 50, height: 50}} />
      </View>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: 'gray',
          alignItems: 'flex-start',
          justifyContent: 'space-evenly',
          marginTop: 30,
        }}>
        <View style={{backgroundColor: 'red', width: 50, height: 50}} />
        <View style={{backgroundColor: 'green', width: 50, height: 50}} />
        <View style={{backgroundColor: 'blue', width: 50, height: 50}} />
        <View style={{backgroundColor: 'yellow', width: 50, height: 50}} />
      </View>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: 'gray',
          alignItems: 'flex-start',
          justifyContent: 'space-around',
          marginTop: 30,
        }}>
        <View style={{backgroundColor: 'red', width: 50, height: 50}} />
        <View style={{backgroundColor: 'green', width: 50, height: 50}} />
        <View style={{backgroundColor: 'blue', width: 50, height: 50}} />
        <View style={{backgroundColor: 'yellow', width: 50, height: 50}} />
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 30,
        }}>
        <Text>hello</Text>
        <Text>hello</Text>
        <Text>hello</Text>
        <Text>hello</Text>
      </View>

      <View style={{flexDirection: 'row', marginTop: 30, alignItems: 'center'}}>
        <Image
          source={{uri: 'https://randomuser.me/api/portraits/men/10.jpg'}}
          style={{width: 100, height: 100, borderRadius: 50, marginRight: 10}}
        />
        <View>
          <Text>Nembol Neman</Text>
          <Text>profile</Text>
        </View>
      </View>
    </View>
  );
}

export default FlexBox;
