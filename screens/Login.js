/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {
    View,
    Image,
    StyleSheet,
    ScrollView,
    SafeAreaView,
    TextInput,
    TouchableOpacity,
    Text,
} from 'react-native';
import React, { useState } from 'react';
import CustomButton from '../CustomButton/CustomButton';
import Logo from '../assets/Splash.png';
import LinearGradient from 'react-native-linear-gradient';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import auth from '@react-native-firebase/auth';

const Login = function ({ navigation }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const onSignInPressed = function () {
        auth()
        .signInWithEmailAndPassword(username, password)
        .then(() => {
          navigation.replace('Home');
        })
        .catch(error => {
          if (error.code === 'auth/email-already-in-use') {
            console.alert('That email address is already in use!');
          }
      
          if (error.code === 'auth/invalid-email') {
            console.alert('That email address is invalid!');
          }
          console.error(error);
        });
       
    };
    const onForgotPasswordPressed = function () {
        navigation.replace('ForgetPassword');
    };
    const onSignUpPressed = function () {
        navigation.replace('SignUp');
    };

    return (
        <SafeAreaView style={styles.root1}>
            <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#ffffff', '#ffffff']} style={styles.linearGradient1}>
                <ScrollView>
                    <View style={styles.root}>
                        <Image
                            source={Logo}
                            style={styles.Logo}
                            resizeMode="contain"
                        />
                        <View style={styles.container}>
                            <TextInput
                                value={username}
                                onChangeText={setUsername}
                                placeholder="Username"
                                placeholderTextColor={'black'}
                                style={styles.input}
                                secureTextEntry={false}
                            />
                        </View>
                        <View style={styles.container}>
                            <TextInput
                                value={password}
                                onChangeText={setPassword}
                                placeholder="Password"
                                placeholderTextColor={'black'}
                                style={styles.input}
                                secureTextEntry={true}
                            />
                        </View>

                        <View style={{ width: '100%' }}>
                            <TouchableOpacity onPress={onSignInPressed}>
                                <View >
                                    <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#0e8c4d', '#096235']} style={styles.linearGradient}>
                                        <Text style={styles.buttonTextStyle}>Login</Text>
                                    </LinearGradient>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <CustomButton
                            text="Forget password"
                            onPress={onForgotPasswordPressed}
                            bgColor="transparent"
                            fgColor="#096235"
                        />

                        <CustomButton
                            text="Don't have an account? Create one"
                            onPress={onSignUpPressed}
                            bgColor="transparent"
                            fgColor="#0e8c4d"
                        />
                    </View>
                </ScrollView>

            </LinearGradient>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 29,
        borderColor: '#ffffff',
    },
    linearGradient1: {
        flex: 1,
        paddingTop: '15%',
    },
    Logo: {
        width: 100,
        maxWidth: 150,
        maxHeight: 150,
        height: 150,
        borderColor: '#000000',
        paddingTop: 20,
        paddingBottom: 200,
    },
    root1: {
        flex: 1,
    },
    container: {
        backgroundColor: '#ffffff',
        width: '100%',
        height: '9%',
        borderColor: '#0e8c4d',
        borderWidth: 2,
        borderRadius: 20,
        paddingHorizontal: 10,
        marginVertical: 5,

    },
    buttonTextStyle: {
        color: '#ffffff',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',

    },
    input: {

        color: 'black',
    },
    linearGradient: {
        flexDirection: 'row',
        width: '100%',
        padding: 15,
        paddingEnd: 5,
        borderRadius: 20,
        marginVertical: 5,
        alignItems: 'center',
        justifyContent: 'center',
        tintColor: Colors.white,
    },
});

export default Login;
