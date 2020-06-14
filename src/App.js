import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './styles';
import {Input} from 'react-native-elements';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View>
            <Text>Welcome,</Text>
            <Text>Sign in to Continue</Text>
          </View>
          <Text>Sign</Text>
        </View>
        <View style={{marginTop: 100}}>
          <View>
            <Text style={{marginBottom: 20}}>Email</Text>
            <Input />
            <Text style={{marginBottom: 20}}>Password</Text>
            <Input />
            <Text style={{textAlign: 'right'}}>Forgot Password?</Text>
            <View style={styles.btnAuth}>
              <Text>SIGN IN</Text>
            </View>
          </View>
        </View>
      </View>
      <Text style={{textAlign: 'center'}}>_OR_</Text>
      <View
        style={{
          width: 380,
          height: 50,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'red',
        }}>
        <Text>SIGN IN</Text>
      </View>
    </View>
  );
}
