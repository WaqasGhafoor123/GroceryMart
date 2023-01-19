/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prettier/prettier */
import { View, Text, TouchableOpacity, SafeAreaView, StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';

export default function Settings({ navigation }) {
    const back = function () {
        navigation.replace('Home');
    };
    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft: () => <TouchableOpacity><MaterialIcons name="arrow-back" size={24} color="#096235" onPress={back} /></TouchableOpacity>,
        });
    }, [navigation, back]);

    const onProfileSettings = function () {
        navigation.navigate('ProfileSetting');
    };

    const onLogout = function () {
        navigation.replace('/');
    };
    const onHelp = function () {
        navigation.navigate('Help');
    };
    const onContactUs = function () {
        navigation.navigate('ContactUs');
    };
    const onRateUs = function () {
        navigation.navigate('RateUs');
    };
    return (
        <SafeAreaView style={styles.container}>
            <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#ffffff', '#ffffff']} style={styles.linearGradient1}>

                <ScrollView>
                    <View style={styles.spacing}>
                        <TouchableOpacity>
                            <MaterialIcons name="person" size={150} color="#096235" />

                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity onPress={onProfileSettings}>
                        <View style={styles.root}>
                            <MaterialIcons name="person" size={30} color="#096235" />
                            <Text style={styles.TextStyle}>Profile Setting</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={onHelp}>
                        <View style={styles.root}>
                            <MaterialIcons name="help" size={30} color="#096235" />
                            <Text style={styles.TextStyle}>Help</Text>

                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={onContactUs}>
                        <View style={styles.root}>
                            <MaterialIcons name="contact-mail" size={30} color="#096235" />
                            <Text style={styles.TextStyle}>Contact Us</Text>

                        </View>

                    </TouchableOpacity>

                    <TouchableOpacity onPress={onRateUs}>
                        <View style={styles.root}>
                            <MaterialIcons name="star-rate" size={30} color="#096235" />
                            <Text style={styles.TextStyle}>Rate Us</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={onLogout}>
                        <View style={styles.root}>
                            <MaterialIcons name="logout" size={30} color="#096235" />
                            <Text style={styles.TextStyle}>Logout</Text>

                        </View>
                    </TouchableOpacity>
                </ScrollView>
            </LinearGradient>

        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        backgroundColor: '#000000',
    },
    root: {
        height: 50,
        width: '90%',
        display: 'flex',
        flexDirection: 'row',
        flex: 1,
        borderRadius: 10,
        backgroundColor: '#FAF9F6',
        alignContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
        alignSelf: 'center',
    },
    TextStyle: {
        color: '#096235',
        paddingLeft: '3%',
        paddingBottom: 0,
        fontWeight: 'bold',
        alignContent: 'space-between',

    },
    button: {
        alignSelf: 'flex-end',
        alignContent: 'space-between',
        paddingVertical: 15,
    },
    spacing: {
        height: 170,
        width: 170,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
        borderRadius: 100,
        paddingBottom: 10,
        marginTop: '8%',
        marginBottom: '8%',
        alignSelf: 'center',
        borderWidth: 3,
        borderColor: '#096235',

    },
    linearGradient1: {
        flex: 1,
    },
});
