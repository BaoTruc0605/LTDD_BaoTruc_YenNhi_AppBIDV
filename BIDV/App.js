import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Pressable, TouchableOpacity } from 'react-native';
import Home from './components/Home'
import Login from './components/Login'
import Screen03 from './components/Screen03'
import Screen04 from './components/Screen04'
import Screen05 from './components/Screen05'
import Screen06 from './components/Screen06'
import Screen07 from './components/Screen07'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Footer from './components/Footer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { UserProvider } from './components/UserProvider';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();



export default function App() {
  return (
    <UserProvider>
      <NavigationContainer >

        <Tab.Navigator tabBar={(props) => <Footer {...props} />}>
          <Tab.Screen name="Login" component={Login} />
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Screen03" component={Screen03} />
          <Tab.Screen name="Screen04" component={Screen04} />
          <Tab.Screen name="Screen05" component={Screen05} />
          <Tab.Screen name="Screen06" component={Screen06} />
          <Tab.Screen name="Screen07" component={Screen07}

          />
        </Tab.Navigator>
      </NavigationContainer>
    </UserProvider>
  );
}

