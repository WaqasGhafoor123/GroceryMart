/* eslint-disable prettier/prettier */

import * as React from 'react';
import FruitsNvegetables from './FruitsNvegetables';
import Grains from './Grains';
import Herbs from './Herbs';


import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';



const Tab = createMaterialTopTabNavigator();

export default function Call() {
    return (

        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: '#0e8c4d',
                tabBarInactiveTintColor: '#000000',
                tabBarContentContainerStyle: {
                    height: 50,
                    backgroundColor: '#ffffff',
                    justifyContent: 'space-between',
                },
            }}>
            <Tab.Screen name="Grains" component={Grains} />
            <Tab.Screen name="Spices" component={Herbs} />
            <Tab.Screen name="Fruits" component={FruitsNvegetables} />
        </Tab.Navigator>

    );
}



