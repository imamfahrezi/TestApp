import React from 'react';
import {View, ScrollView, Text} from 'react-native';
import {Provider} from 'react-redux';
import ContohComponents from './src/ContohComponents';
import StyleBasic from './src/StyleBasic';
import FlexBox from './src/FlexBox';
import PropsDinamis from './src/PropsDinamis';
import StateDinamis from './src/StateDinamis';
import Comunication from './src/comunications/Comunication';

import {NavigationContainer} from '@react-navigation/native';
import Router from './src/ojol/Router';
import {store} from './src/ojol/redux';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        {/* <ContohComponents />
     <StyleBasic />
      <FlexBox />
      <PropsDinamis />
      <StateDinamis />
      <Comunication /> */}
        <Router />
      </NavigationContainer>
    </Provider>
  );
}

// API KEY
// 7902ced8
