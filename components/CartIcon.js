/* eslint-disable prettier/prettier */
import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { CartContext } from '../screens/CartContext';
export function CartIcon({ navigation }) {
    const { getItemsCount } = useContext(CartContext);
    return (
        <View style={styles.container}>
            <MaterialIcons name="shopping-cart" size={28} color="black" />

            <Text
                style={styles.text}
                onPress={() => {
                    navigation.navigate('Cart');
                }}>

                ({getItemsCount()})
            </Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        marginHorizontal: 8,
        backgroundColor: 'white',
        height: 50,
        width: 80,
        padding: 12,
        borderRadius: 32 / 2,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    text: {
        color: 'black',
        fontWeight: 'bold',

    },
});
