import React from 'react';
import {View, Text, TextInput} from 'react-native';

const Form = ({placeholder, ...rest}) => {
  return (
    <TextInput
      style={{
        borderWidth: 2,
        marginBottom: 10,
        borderRadius: 30,
        paddingHorizontal: 20,
      }}
      {...rest}
      placeholder={placeholder}
    />
  );
};

export default Form;