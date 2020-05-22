import React, {Component} from 'react';
import {Text, View, Image, TextInput, StyleSheet} from 'react-native';

export default function App() {
  return <StyleComponents />;
}

function StyleComponents() {
  return (
    <View>
      <Text style={styles.text}>Styling Components</Text>
      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: 'blue',
          borderWidth: 2,
          borderColor: 'red',
          marginTop: 20,
          marginLeft: 20,
        }}
      />
      <View
        style={{
          padding: 10,
          backgroundColor: 'red',
          width: 120,
          borderRadius: 8,
        }}>
        <Image
          source={{uri: 'https://randomuser.me/api/portraits/men/10.jpg'}}
          style={{width: 100, height: 100, borderRadius: 8}}
        />
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>imam</Text>
        <Text style={{fontSize: 10, color: 'orange'}}>RP. 2.000-</Text>
        <Text style={{fontSize: 10}}>jakarta barat</Text>
        <View style={{width: 100, borderRadius: 10, backgroundColor: 'green'}}>
          <Text
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              color: 'white',
            }}>
            BELI
          </Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'green',
    marginLeft: 20,
    marginTop: 20,
  },
});

function Contoh() {
  return (
    <View>
      <View style={{width: 80, height: 80, backgroundColor: 'red'}} />
      <Text>Hello world</Text>
      <Text>Hello world</Text>
      <Text>Hello world</Text>
      <Name />
      <Gambar />
      <TextInput style={{borderWidth: 2}} />
      <BoxGreen />
      <GambarClass />
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

// Class components
class BoxGreen extends Component {
  render() {
    return <Text>class Component</Text>;
  }
}

class GambarClass extends Component {
  render() {
    return (
      <View>
        <Image
          source={{uri: 'https://randomuser.me/api/portraits/men/10.jpg'}}
          style={{width: 100, height: 100}}
        />
        <Text>profile</Text>
      </View>
    );
  }
}
