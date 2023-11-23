import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import login from './components/Login'
import home from './components/Home'
import screen03 from './components/Screen03'
import screen04 from './components/Screen04'
import screen05 from './components/Screen05'
import screen06 from './components/Screen06'
import screen07 from './components/Screen07';
import screen08 from './components/Screen08';


const Stack = createNativeStackNavigator();
export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Screen04">
        <Stack.Screen name="Login" component={login} />
        <Stack.Screen name="Home" component={home} />
        <Stack.Screen name="Screen03" component={screen03} />
        <Stack.Screen name="Screen04" component={screen04} />
        <Stack.Screen name="Screen05" component={screen05} />
        <Stack.Screen name="Screen06" component={screen06} />
        <Stack.Screen name="Screen07" component={screen07} />
        <Stack.Screen name="Screen08" component={screen08} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
