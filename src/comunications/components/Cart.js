import React from 'react';
import {View, Text} from 'react-native';

const Cart = props => {
  return (
    <View style={{alignItems: 'center', maxWidth: 200}}>
      <Text style={{textAlign: 'center'}}>
        Jumlah Product yang dimasukan ke keranjang
      </Text>
      <Text>{props.quantity}</Text>
    </View>
  );
};

export default Cart;
