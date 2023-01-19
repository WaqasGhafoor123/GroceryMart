/* eslint-disable prettier/prettier */

/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {
    View,
    StyleSheet,
    ScrollView,
    Image,
    SafeAreaView,
    TextInput,
    Text,
    TouchableOpacity,
} from 'react-native';
import React, { useState,useEffect } from 'react';
import Logo from '../../assets/Splash.png';
import LinearGradient from 'react-native-linear-gradient';

import firestore from '@react-native-firebase/firestore';


const ContactUs = function ({ navigation }) {
    const [Email, setEmail] = useState('');
    const [Message, setMessage] = useState('');

    const onSendMessage = function () {
        navigation.replace('Settings');
    };

    useEffect(() => {
        firestore()
        .collection('users')
        .doc('agZit0JApJOnXSmTRgFS')
        .get()
        .then(documentSnapshot => {
          console.log('User exists: ', documentSnapshot.exists);
          
      
          if (documentSnapshot.exists) {
            console.log('User data: ', documentSnapshot.data());
            console.log(documentSnapshot.data());
            setEmail(documentSnapshot.data().email);
           
          }
        });
    
    }
    )

    return (
        <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#ffffff', '#ffffff']} style={styles.linearGradient1}>

            <SafeAreaView style={styles.root1}>

                <ScrollView>
                    <View style={styles.root}>
                        <Image
                            source={Logo}
                            style={styles.Logo}
                            resizeMode="contain"
                        />
                        <View style={styles.container}>
                            <TextInput
                                value={Email}
                                onChangeText={setEmail}
                                placeholder="email@gmail.com"
                                placeholderTextColor={'#096235'}
                                style={styles.input}
                            />
                        </View>
                        <View style={styles.container1}>
                            <TextInput
                                value={Message}
                                onChangeText={setMessage}
                                placeholder="What do you want to ask? type here"
                                placeholderTextColor={'#096235'}
                                style={styles.input}
                                multiline={true}
                            />
                        </View>
                        <View style={{ width: '100%' }}>
                            <TouchableOpacity onPress={onSendMessage}>
                                <View >
                                    <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#0e8c4d', '#096235']} style={styles.linearGradient}>
                                        <Text style={styles.buttonTextStyle}>Send Message</Text>
                                    </LinearGradient>
                                </View>
                            </TouchableOpacity>
                        </View>
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
    Logo: {
        width: 100,
        maxWidth: 150,
        maxHeight: 150,
        height: 150,
        borderColor: '#ffffff',
        marginBottom: 20,
    },
    root1: {
        flex: 1,

    },
    container: {
        backgroundColor: 'transparent',
        width: '100%',
        height: '15%',
        borderColor: '#096235',
        borderWidth: 3,
        borderRadius: 15,
        paddingHorizontal: 10,
        marginVertical: 5,
    },
    container1: {
        backgroundColor: 'transparent',
        width: '100%',
        height: '25%',
        borderColor: '#096235',
        borderWidth: 3,
        borderRadius: 15,
        paddingHorizontal: 10,
        marginVertical: 5,

    },
    input: {

        color: '#096235',
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
        tintColor: 'white',
    },
    buttonTextStyle: {
        color: '#ffffff',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        fontSize: 16,

    },
    linearGradient1: {
        flex: 1,
    },


});

export default ContactUs;
