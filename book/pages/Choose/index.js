import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {BgHeader} from '../../assets';
import {ScrollView} from 'react-native-gesture-handler';

export default function Choose() {
  return (
    <ScrollView>
      <View style={styles.section}>
        <BgHeader style={styles.image} />
        <View style={styles.title}>
          <Text style={styles.text}>Welcome</Text>
          <Text style={styles.text}>Choose the topics</Text>
        </View>
        <View style={styles.container}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
            }}>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: 35,
              }}>
              <Image
                source={require('../../assets/bg/1.png')}
                style={{width: 100, height: 100, borderRadius: 50}}
              />
              <Text
                style={{
                  fontSize: 16,
                  color: '#17191D',
                  marginTop: 6,
                }}>
                George
              </Text>
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: 35,
              }}>
              <Image
                source={require('../../assets/bg/1.png')}
                style={{width: 100, height: 100, borderRadius: 50}}
              />
              <Text
                style={{
                  fontSize: 16,
                  color: '#17191D',
                  marginTop: 6,
                }}>
                George
              </Text>
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: 35,
              }}>
              <Image
                source={require('../../assets/bg/1.png')}
                style={{width: 100, height: 100, borderRadius: 50}}
              />
              <Text
                style={{
                  fontSize: 16,
                  color: '#17191D',
                  marginTop: 6,
                }}>
                George
              </Text>
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: 35,
              }}>
              <Image
                source={require('../../assets/bg/1.png')}
                style={{width: 100, height: 100, borderRadius: 50}}
              />
              <Text
                style={{
                  fontSize: 16,
                  color: '#17191D',
                  marginTop: 6,
                }}>
                George
              </Text>
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: 35,
              }}>
              <Image
                source={require('../../assets/bg/1.png')}
                style={{width: 100, height: 100, borderRadius: 50}}
              />
              <Text
                style={{
                  fontSize: 16,
                  color: '#17191D',
                  marginTop: 6,
                }}>
                George
              </Text>
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: 35,
              }}>
              <Image
                source={require('../../assets/bg/1.png')}
                style={{width: 100, height: 100, borderRadius: 50}}
              />
              <Text
                style={{
                  fontSize: 16,
                  color: '#17191D',
                  marginTop: 6,
                }}>
                George
              </Text>
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: 35,
              }}>
              <Image
                source={require('../../assets/bg/1.png')}
                style={{width: 100, height: 100, borderRadius: 50}}
              />
              <Text
                style={{
                  fontSize: 16,
                  color: '#17191D',
                  marginTop: 6,
                }}>
                George
              </Text>
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: 35,
              }}>
              <Image
                source={require('../../assets/bg/1.png')}
                style={{width: 100, height: 100, borderRadius: 50}}
              />
              <Text
                style={{
                  fontSize: 16,
                  color: '#17191D',
                  marginTop: 6,
                }}>
                George
              </Text>
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: 35,
              }}>
              <Image
                source={require('../../assets/bg/1.png')}
                style={{width: 100, height: 100, borderRadius: 50}}
              />
              <Text
                style={{
                  fontSize: 16,
                  color: '#17191D',
                  marginTop: 6,
                }}>
                George
              </Text>
            </View>
          </View>
          <View>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 15,
                color: '#FF6EA1',
                marginBottom: 17,
              }}>
              More Topics
            </Text>
            <View
              style={{
                backgroundColor: '#FF6EA1',
                borderRadius: 5,
                height: 45,
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: 50,
              }}>
              <Text style={{color: 'white', fontSize: 20}}>Apply</Text>
            </View>
            <View />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  section: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    position: 'relative',
    marginTop: -175,
    marginLeft: -130,
  },
  title: {
    position: 'absolute',
    paddingHorizontal: 30,
    paddingTop: 10,
  },
  text: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'normal',
  },
  container: {
    paddingHorizontal: 30,
  },
});
