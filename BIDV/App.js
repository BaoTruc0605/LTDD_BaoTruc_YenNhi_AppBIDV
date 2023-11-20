import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Pressable, TouchableOpacity } from 'react-native';
import Home from './components/Home'
import Login from './components/Login'
import Screen03 from './components/Screen03'
import Screen04 from './components/Screen04'
import Screen05 from './components/Screen05'
import Screen06 from './components/Screen06'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        {/* <Stack.Screen name="MuaSam" component={MuaSam} />  */}

        <Stack.Screen name="Screen03" component={Screen03} />
        <Stack.Screen name="Screen04" component={Screen04} />
        <Stack.Screen name="Screen05" component={Screen05} />
        <Stack.Screen name="Screen06" component={Screen06} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

