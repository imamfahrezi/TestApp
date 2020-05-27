import React from 'react';
import {Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

export const ActionButton = ({title}) => {
  return (
    <View
      style={{
        backgroundColor: '#00a1ab',
        width: 100,
        height: 40,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30,
      }}>
      <TouchableOpacity>
        <Text>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};
