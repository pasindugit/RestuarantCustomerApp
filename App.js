/* eslint-disable react-hooks/exhaustive-deps */
import * as React from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import SignIn from './src/screens/SignIn';
import SplashScreen from './src/screens/SplashScreen';
import SignUp from './src/screens/SignUp';
import Toast from 'react-native-toast-message';
import Home from './src/screens/Home';
import Products from './src/screens/Products';
import Cart from './src/screens/Cart';
import Profile from './src/screens/Profile';

import { CustomDrawerContent } from './src/drawer/CustomDrawerContent';

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator
      edgeWidth={0}
      initialRouteName="SplashScreen"
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name={'SignIn'} component={SignIn} />
      <Drawer.Screen name={'SplashScreen'} component={SplashScreen} />
      <Drawer.Screen name={'SignUp'} component={SignUp} />
      <Drawer.Screen name={'Home'} component={Home} />
      <Drawer.Screen name={'Products'} component={Products} />
      <Drawer.Screen name={'Cart'} component={Cart} />
      <Drawer.Screen name={'Profile'} component={Profile} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyDrawer />
      <Toast />
    </NavigationContainer>
  );
}
