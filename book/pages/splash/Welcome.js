import React, {useEffect} from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {Title} from '../../assets';

export default function Welcome({navigation}) {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('GetStarted');
    }, 2000);
  }, [navigation]);

  return (
    <View style={styles.splash}>
      <Title />
    </View>
  );
}

const styles = StyleSheet.create({
  splash: {
    backgroundColor: '#FF6EA1',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
