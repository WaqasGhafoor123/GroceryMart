/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */

/* eslint-disable prettier/prettier */
import * as React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import DailyEssentials from './DailyEssentials';
import DairyProducts from './DairyProducts';
import Drinks from './Drinks';
import Snacks from './Snacks';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import ContactUs from './AppSettings/ContactUs';
import Help from './AppSettings/Help';
import ProfileSetting from './AppSettings/ProfileSetting';
import RateUs from './AppSettings/RateUs';
import { CartIcon } from '../components/CartIcon';
import ProductDetails from './ProductDetails';


const Tab = createMaterialTopTabNavigator();

const Drawer = createDrawerNavigator();

function Tabs({ navigation }) {
  return (
    <Tab.Navigator
      initialRouteName="Call"
      screenOptions={{
        tabBarActiveTintColor: '#0e8c4d',
        tabBarInactiveTintColor: '#000000',
        tabBarContentContainerStyle: {
          backgroundColor: '#ffffff',
        },

      }}
    >
      <Tab.Screen name="Daily Essentials" component={DailyEssentials} />
      <Tab.Screen name="Dairy Products" component={DairyProducts} />
      <Tab.Screen name="Snacks" component={Snacks} />
      <Tab.Screen name="Drinks" component={Drinks} />
      <Tab.Screen name="ProductDetails" component={ProductDetails}
      initialParams={{params:{productId:'1'}}}/>

    </Tab.Navigator>
  );
}
export default function Home({ navigation }) {

  return (
    <><NavigationContainer independent={true} >
      <Drawer.Navigator useLegacyImplementation initialRouteName="Tabs">
        <Drawer.Screen name="Grocery Shop" component={Tabs}
          options={{
            drawerIcon: ({ focused, size }) => (
              <MaterialIcons name="home"
                size={size}
                color={focused ? '#096235' : '#0e8c4d'} />
            ),
            headerShown: true,
            headerRight: () => <CartIcon navigation={navigation} />,
          }}
        />
        <Drawer.Screen name="Profile Setting" component={ProfileSetting}
          options={{
            drawerIcon: ({ focused, size }) => (
              <MaterialIcons name="person"
                size={size}
                color={focused ? '#096235' : '#0e8c4d'} />
            ),
          }}
        />
        <Drawer.Screen name="Contact Us" component={ContactUs}
          options={{
            drawerIcon: ({ focused, size }) => (
              <MaterialIcons name="contact-mail"
                size={size}
                color={focused ? '#096235' : '#0e8c4d'} />
            ),
          }}
        />
        <Drawer.Screen name="Help" component={Help}
          options={{
            drawerIcon: ({ focused, size }) => (
              <MaterialIcons name="help"
                size={size}
                color={focused ? '#096235' : '#0e8c4d'} />
            ),
          }}
        />
        <Drawer.Screen name="Rate Us" component={RateUs}
          options={{
            drawerIcon: ({ focused, size }) => (
              <MaterialIcons name="star-rate"
                size={size}
                color={focused ? '#096235' : '#0e8c4d'} />
            ),
          }}
        />



      </Drawer.Navigator>

    </NavigationContainer>
    </>
  );
}
