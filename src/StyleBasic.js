import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
function StyleBasic() {
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

export default StyleBasic;
