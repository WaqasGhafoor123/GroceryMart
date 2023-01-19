/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
import {
    View,
    StyleSheet,
    ScrollView,
    SafeAreaView,
    StatusBar,
    TextInput,
    TouchableOpacity,
} from 'react-native';
import React, { useState,useEffect } from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';
import firestore from '@react-native-firebase/firestore';


const ProfileSetting = function ({ navigation }) {
    const [Name, setName] = useState('');
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [press, setPress] = useState(true);
    const [press1, setPress1] = useState(true);
    const [press2, setPress2] = useState(true);
    
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
                setName(documentSnapshot.data().username);
                setPassword(documentSnapshot.data().password);
              }
            });
        
        }
        )

        


    return (
        <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#ffffff', '#ffffff']} style={styles.linearGradient1}>

            <SafeAreaView style={styles.root1}>
                <StatusBar />
                <ScrollView>
                    <View style={styles.root}>
                        <View style={styles.spacing}>
                            <TouchableOpacity>
                                <MaterialIcons name="person" size={150} color="#096235" />

                            </TouchableOpacity>
                        </View>
                        <View style={styles.container}>
                            <TextInput
                                value={Name}
                                onChangeText={setName}
                                placeholder="Name"
                                placeholderTextColor={'#096235'}
                                style={styles.input}
                            />
                            <TouchableOpacity ><MaterialIcons name={press ? 'edit' : 'done'} style={styles.edit1} size={20} color="#096235" onPress={() => setPress(!press)} /></TouchableOpacity>


                        </View>
                        <View style={styles.container}>
                            <TextInput
                                value={Email}
                                onChangeText={setEmail}
                                placeholder="email@gmail.com"
                                placeholderTextColor={'#096235'}
                                style={styles.input}
                            />
                            <TouchableOpacity ><MaterialIcons name={press1 ? 'edit' : 'done'} style={styles.edit1} size={20} color="#096235" onPress={() => setPress1(!press1)} /></TouchableOpacity>


                        </View>

                        <View style={styles.container}>
                            <TextInput
                                value={Password}
                                onChangeText={setPassword}
                                placeholder="Password"
                                placeholderTextColor={'#096235'}
                                style={styles.input}
                                secureTextEntry={true}
                            />
                            <TouchableOpacity ><MaterialIcons name={press2 ? 'edit' : 'done'} style={styles.edit1} size={20} color="#096235" onPress={() => setPress2(!press2)} /></TouchableOpacity>


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
        marginTop: '5%',
        marginLeft: '4%',
        marginRight: '4%',

    },

    root1: {
        flex: 1,

    },

    container: {
        backgroundColor: 'white',
        width: '100%',
        height: '18%',
        borderColor: '#096235',
        borderWidth: 3,
        borderRadius: 15,
        paddingHorizontal: 10,
        marginVertical: 5,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',


    },

    edit1: {
        paddingLeft: 0,

    },

    input: {

        color: '#096235',
    },
    spacing: {
        height: 170,
        width: 170,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
        borderRadius: 100,
        paddingBottom: 10,
        marginBottom: 15,
        borderWidth: 3,
        borderColor: '#096235',

    },
    linearGradient1: {
        flex: 1,
    },

});
export default ProfileSetting;
