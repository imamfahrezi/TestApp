import React from 'react';
import {Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import ButtonIcon from './ButtonIcon';

export const ActionButton = ({title, onPress, type, name}) => {
  if (type === 'icon') {
    <ButtonIcon name="back" onPress={onPress} />;
  }
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
      <TouchableOpacity onPress={onPress}>
        <Text>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};
