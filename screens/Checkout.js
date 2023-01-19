/* eslint-disable prettier/prettier */

/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { SelectList } from 'react-native-dropdown-select-list';


const Checkout = ({ navigation }) => {

    const onPlaceOrder = function () {
        navigation.replace('Home');
    };
    const [selected, setSelected] = React.useState('');

    const data = [
        { key: 'COD', value: 'COD' },
        { key: 'Bank Transfr', value: 'Bank Transfer' },
        { key: 'JazzCash', value: 'JazzCash' },
        { key: 'Easypaisa', value: 'Easypaisa' },
    ];


    return (
        <View style={{ paddingHorizontal: 15, marginTop: 15 }}>


            <SelectList placeholder="Select payment method" setSelected={setSelected} data={data} />


            <View style={{ marginTop: 50 }}>
                <Text style={{ color: 'black' }}>Payment Method : </Text>
                <Text style={{ marginTop: 10, color: 'green' }}>{selected}</Text>
            </View>

            <View style={{ width: '100%' }}>
                <TouchableOpacity onPress={onPlaceOrder}>
                    <View>
                        <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#0e8c4d', '#096235']} style={styles.linearGradient}>
                            <Text style={styles.buttonTextStyle}>Place Order</Text>
                        </LinearGradient>
                    </View>
                </TouchableOpacity>
            </View>
        </View>

    );

};

export default Checkout;

const styles = StyleSheet.create({

    buttonTextStyle: {
        color: '#ffffff',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',

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
