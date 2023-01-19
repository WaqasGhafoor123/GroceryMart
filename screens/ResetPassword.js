/* eslint-disable prettier/prettier */

/* eslint-disable react-native/no-inline-styles */
import { View, Text, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity, TextInput } from 'react-native';
import React, { useState } from 'react';
import CustomButton from '../CustomButton/CustomButton';
import LinearGradient from 'react-native-linear-gradient';
import { Colors } from 'react-native/Libraries/NewAppScreen';


const ResetPassword = function ({ navigation }) {
  const [Password, setPassword] = useState('');
  const [CPassword, setCPassword] = useState('');
  const onBacktoLoginPressed = function () {
    navigation.replace('/');
  };

  const onSubmitPressed = function () {
    console.warn('Password changed successfully');
    navigation.replace('/');
  };

  return (

    <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#ffffff', '#ffffff']} style={styles.linearGradient1}>
      <SafeAreaView style={styles.root1}>

        <ScrollView>
          <View style={styles.root}>
            <Text style={styles.title}>Create New Password</Text>
            <View style={styles.container}>
              <TextInput
                value={Password}
                onChangeText={setPassword}
                placeholder="Enter new Password"
                placeholderTextColor={'black'}
                style={styles.input}
                secureTextEntry={false}
              />
            </View>
            <View style={styles.container}>
              <TextInput
                value={CPassword}
                onChangeText={setCPassword}
                placeholder="Confirm Password"
                placeholderTextColor={'black'}
                style={styles.input}
                secureTextEntry={false}
              />

            </View>

            <View style={{ width: '100%' }}>
              <TouchableOpacity onPress={onSubmitPressed}>
                <View >
                  <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#0e8c4d', '#096235']} style={styles.linearGradient}>
                    <Text style={styles.buttonTextStyle}>Submit</Text>
                  </LinearGradient>
                </View>
              </TouchableOpacity>
            </View>


            <CustomButton
              text="Back to Login"
              onPress={onBacktoLoginPressed}
              bgColor="Transparent"
              fgColor="#096235"
            />
          </View>
        </ScrollView>

      </SafeAreaView>
    </LinearGradient>

  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
    marginBottom: 100,
    marginTop: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#096235',
    margin: 20,
    paddingTop: 40,
  },
  text: {
    color: 'gray',
    marginVertical: 30,
  },

  root1: {
    flex: 1,

  },
  container: {
    backgroundColor: '#ffffff',
    width: '100%',
    borderColor: '#096235',
    borderWidth: 2,
    borderRadius: 15,
    paddingHorizontal: 10,
    marginVertical: 5,
  },
  input: {
    color: 'black',
  },
  linearGradient1: {
    flex: 1,
    paddingTop: '15%',
  },
  linearGradient: {
    flexDirection: 'row',
    width: '100%',
    padding: 15,
    paddingEnd: 5,
    borderRadius: 15,
    marginVertical: 5,
    alignItems: 'center',
    justifyContent: 'center',
    tintColor: Colors.white,
  },
  buttonTextStyle: {
    color: '#ffffff',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    fontSize: 16,

  },
});

export default ResetPassword;
