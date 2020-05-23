import React from 'react';
import {View, ScrollView} from 'react-native';
import ContohComponents from './src/ContohComponents';
import StyleBasic from './src/StyleBasic';
import FlexBox from './src/FlexBox';
import PropsDinamis from './src/PropsDinamis';
import StateDinamis from './src/StateDinamis';

export default function App() {
  return (
    <View>
      <ScrollView>
        {/* <ContohComponents />
        <StyleBasic /> */}
        {/* <FlexBox /> */}
        {/* <PropsDinamis /> */}
        <StateDinamis />
      </ScrollView>
    </View>
  );
}
