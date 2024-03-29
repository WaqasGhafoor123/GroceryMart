/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import { View, TextInput, Text, SafeAreaView, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import Logo from '../../assets/Splash.png';
import LinearGradient from 'react-native-linear-gradient';


export default function ProfileSettings({ navigation }) {


    const [Feedback, setFeedBack] = useState('');
    const [defaultRating, setDefaultRating] = useState(5);
    // To set the max number of Stars
    // eslint-disable-next-line no-unused-vars
    const [maxRating, setMaxRating] = useState([1, 2, 3, 4, 5]);

    // Filled Star. You can also give the path from local
    const starImageFilled =
        'https://raw.githubusercontent.com/AboutReact/sampleresource/master/star_filled.png';
    // Empty Star. You can also give the path from local
    const starImageCorner =
        'https://raw.githubusercontent.com/AboutReact/sampleresource/master/star_corner.png';


    const CustomRatingBar = () => {
        return (
            <View style={styles.customRatingBarStyle}>
                {maxRating.map((item, key) => {
                    return (
                        <TouchableOpacity
                            activeOpacity={0.7}
                            key={item}
                            onPress={() => setDefaultRating(item)}>
                            <Image
                                style={styles.starImageStyle}
                                source={
                                    item <= defaultRating
                                        ? { uri: starImageFilled }
                                        : { uri: starImageCorner }
                                }
                            />
                        </TouchableOpacity>
                    );
                })}
            </View>
        );
    };
    const onRate = function () {
        navigation.replace('Settings');
    };

    return (
        <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#ffffff', '#ffffff']} style={styles.linearGradient1}>

            <SafeAreaView style={styles.container}>
                <ScrollView>

                    <View style={styles.aftersafe}>
                        <View style={styles.root}>
                            <Image
                                source={Logo}
                                style={styles.Logo}
                                resizeMode="contain" />
                        </View>
                        <Text style={styles.textStyleSmall}>Please Rate Us</Text>
                        {/*View to hold our Stars*/}
                        <CustomRatingBar />
                        <Text style={styles.textStyle}>
                            {/*To show the rating selected*/}
                            {defaultRating} / {Math.max.apply(null, maxRating)}
                        </Text>
                        <Text style={styles.textStyle}>How was your experience</Text>
                        <View style={styles.container1}>
                            <TextInput
                                value={Feedback}
                                onChangeText={setFeedBack}
                                placeholder="What are your comments about us..."
                                placeholderTextColor={'#096235'}
                                style={styles.input1}
                                multiline={true}


                            />
                        </View>
                        <View style={{ width: '100%' }}>
                            <TouchableOpacity onPress={onRate}>
                                <View >
                                    <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#0e8c4d', '#096235']} style={styles.linearGradient}>
                                        <Text style={styles.buttonTextStyleM}>Rate Us</Text>
                                    </LinearGradient>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>

            </SafeAreaView>
        </LinearGradient>

    );
}
const styles = StyleSheet.create({


    container: {
        flex: 1,
    },
    textStyle: {
        textAlign: 'center',
        fontSize: 23,
        color: '#096235',
        marginTop: 10,
        marginBottom: 10,
    },
    root: {
        alignItems: 'center',
        padding: 29,
        paddingTop: 0,
        paddingBottom: 0,
    },
    Logo: {
        width: 100,
        maxWidth: 150,
        maxHeight: 150,
        height: 150,
        paddingTop: 10,
        paddingBottom: 20,
    },
    textStyleSmall: {
        textAlign: 'center',
        fontSize: 23,
        paddingTop: 10,
        color: '#096235',

    },


    customRatingBarStyle: {
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: 30,
    },
    starImageStyle: {
        width: 40,
        height: 40,
        resizeMode: 'cover',
    },
    container1: {
        backgroundColor: 'transparent',
        width: '100%',
        height: '20%',
        borderColor: '#096235',
        borderWidth: 3,
        borderRadius: 15,
        paddingHorizontal: 10,
        marginVertical: 5,

    },

    input1: {

        color: '#096235',

    },
    linearGradient1: {
        flex: 1,
    },
    aftersafe: {
        alignItems: 'center',
        padding: 20,
        marginBottom: 100,
        marginTop: 10,
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
    buttonTextStyleM: {
        color: '#ffffff',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        fontSize: 16,

    },

});
