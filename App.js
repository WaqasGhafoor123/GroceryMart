/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import Login from './screens/Login';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUp from './screens/signUp';
import ForgetPassword from './screens/forgetPassword';
import EmailConfirm from './screens/EmailConfirm';
import ResetPassword from './screens/ResetPassword';
import Home from './screens/Home';
import Settings from './screens/settings';
import ContactUs from './screens/AppSettings/ContactUs';
import Help from './screens/AppSettings/Help';
import ProfileSetting from './screens/AppSettings/ProfileSetting';
import RateUs from './screens/AppSettings/RateUs';

import { Cart } from './screens/Cart';
import { CartProvider } from './screens/CartContext';
import Checkout from './screens/Checkout';


const RootStack = createNativeStackNavigator();

const App = () => {

  return (
    <CartProvider>

      <NavigationContainer>
        <RootStack.Navigator
          initialRouteName="Login"
          screenOptions={{
            headerTintColor: '#096235',
            headerStyle: {
              backgroundColor: '#ffffff',
            },
          }}
        >
          <RootStack.Screen
            name="/"
            component={Login}
            options={{
              headerShown: false,
            }}
          />
          <RootStack.Screen
            name="ForgetPassword"
            component={ForgetPassword}
            options={{
              headerShown: false,
            }}
          />


          <RootStack.Screen
            name="EmailConfirm"
            component={EmailConfirm}
            options={{
              headerShown: false,
            }}
          />

          <RootStack.Screen
            name="ResetPassword"
            component={ResetPassword}
            options={{
              headerShown: false,
            }}
          />

          <RootStack.Screen
            name="SignUp"
            component={SignUp}
            options={{
              headerShown: false,
            }}
          />

          <RootStack.Screen
            name="Home"
            component={Home}
            options={{
              headerShown: false,
            }}
          />

          <RootStack.Screen
            name="Settings"
            component={Settings}
            options={{
              title: 'Settings',
            }}
          />

          <RootStack.Screen
            name="ContactUs"
            component={ContactUs}
            options={{
              title: 'Contact Us',
            }}
          />

          <RootStack.Screen
            name="Help"
            component={Help}
            options={{
              title: 'Help',
            }}
          />

          <RootStack.Screen
            name="ProfileSetting"
            component={ProfileSetting}
            options={{
              title: 'Profile Setting',
            }}
          />

          <RootStack.Screen
            name="RateUs"
            component={RateUs}
            options={{
              title: 'Rate Us',
            }}
          />


          <RootStack.Screen
            name="Cart"
            component={Cart}

          />
          <RootStack.Screen
            name="Checkout"
            component={Checkout}

          />


        </RootStack.Navigator>
      </NavigationContainer>
    </CartProvider>

  );
};
export default App;
