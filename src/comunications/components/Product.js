import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

const Product = props => {
  return (
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

      <TouchableOpacity onPress={props.press}>
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
      </TouchableOpacity>
    </View>
  );
};

export default Product;
