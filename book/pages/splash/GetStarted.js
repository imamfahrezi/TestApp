import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Undraw} from '../../assets';
import {Slide} from '../../assets';

export default function GetStarted() {
  return (
    <View style={{flex: 1}}>
      <View>
        <Text style={styles.skip}>Skip</Text>
      </View>
      <View
        style={{
          marginTop: 81,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Undraw style={{marginBottom: 75}} />
        <Text style={{fontSize: 20, color: '#17191D'}}>
          Buy And Sell Books With Us
        </Text>
        <Slide style={{marginTop: 60}} />
        <View style={styles.btn}>
          <Text style={styles.title}>Get Started</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  },
  skip: {
    textAlign: 'right',
    padding: 12,
    color: '#969696',
    fontSize: 16,
  },
  btn: {
    backgroundColor: '#FF6EA1',
    width: 184,
    height: 45,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
  },
  title: {
    color: 'white',
    fontSize: 20,
  },
});
