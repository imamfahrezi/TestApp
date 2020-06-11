import React from 'react';
import {Text} from 'react-native';
import {TouchableHighlight} from 'react-native-gesture-handler';

const ButtonIcon = ({...rest}) => {
  return (
    <TouchableHighlight {...rest}>
      {rest.name === 'back' && <Text>Back</Text>}
    </TouchableHighlight>
  );
};

export default ButtonIcon;
