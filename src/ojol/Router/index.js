import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Splash, Login, Register, WelcomeAuth} from '../Pages';
const Stack = createStackNavigator();

const Router = () => {
  return (
    // initialRouteName="Register" untuk tetap di halaman register saat refresh
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="WelcomeAuth"
        component={WelcomeAuth}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
