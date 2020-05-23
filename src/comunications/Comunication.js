import React, {useState} from 'react';
import {View, Text} from 'react-native';
import Cart from './components/Cart';
import Product from './components/Product';

const Comunication = () => {
  const [TotalProduct, setTotalProduct] = useState(0);
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 30,
      }}>
      <Text />
      <Product press={() => setTotalProduct(TotalProduct + 1)} />
      <Cart quantity={TotalProduct} />
    </View>
  );
};

export default Comunication;
