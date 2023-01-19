/* eslint-disable semi */
/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/native-stack';

export const Screen1 = ({ navigation }) => (
  <View style={styles.container}>
    <Text>Screen 1</Text>
    <Button title="Go to Screen 2" onPress={() => navigation.push('Screen2')} />
  </View>
);

export const Screen2 = () => (
  <View style={styles.container}>
    <Text>Screen 2</Text>
  </View>
);

const Stack = createStackNavigator();
export const AppStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Screen1" component={Screen1} />
    <Stack.Screen name="Screen2" component={Screen2} />
  </Stack.Navigator>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
    alignItems: 'center',
    justifyContent: 'center',
  },
})