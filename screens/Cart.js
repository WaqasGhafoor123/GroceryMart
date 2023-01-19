/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect, useState, useContext } from 'react';
import { View, Text, Button, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { CartContext } from './CartContext';
import LinearGradient from 'react-native-linear-gradient';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export function Cart({ navigation }) {
    const { items, getItemsCount, getTotalPrice } = useContext(CartContext);
    const onCheckout = function () {
        navigation.navigate('Checkout');
    };
    function Totals() {
        let [total, setTotal] = useState(0);
        useEffect(() => {
            setTotal(getTotalPrice());
        });
        return (
            <>
                <View style={styles.cartLineTotal}>
                    <Text style={[styles.lineLeft, styles.lineTotal]}>Total</Text>
                    <Text style={styles.lineRight}>PKR {total}</Text>
                </View>

                <View style={{ width: '100%' }}>
                    <TouchableOpacity onPress={onCheckout}>
                        <View>
                            <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#0e8c4d', '#096235']} style={styles.linearGradient}>
                                <Text style={styles.buttonTextStyle}>Checkout</Text>
                            </LinearGradient>
                        </View>
                    </TouchableOpacity>
                </View></>
        );
    }
    function renderItem({ item }) {
        return (
            <View style={styles.cartLine}>
                <Text style={styles.lineLeft}>
                    {item.product.name} x {item.qty}
                </Text>
                <Text style={styles.lineRight}>$ {item.totalPrice}</Text>
            </View>
        );
    }

    return (
        <FlatList
            style={styles.itemsList}
            contentContainerStyle={styles.itemsListContainer}
            data={items}
            renderItem={renderItem}
            keyExtractor={item => item.product.id.toString()}
            ListFooterComponent={Totals}
        />

    );
}
const styles = StyleSheet.create({
    cartLine: {
        flexDirection: 'row',
    },
    cartLineTotal: {
        flexDirection: 'row',
        borderTopColor: '#dddddd',
        borderTopWidth: 1,
    },
    lineTotal: {
        fontWeight: 'bold',
    },
    lineLeft: {
        fontSize: 20,
        lineHeight: 40,
        color: '#333333',
    },
    lineRight: {
        flex: 1,
        fontSize: 20,
        fontWeight: 'bold',
        lineHeight: 40,
        color: '#333333',
        textAlign: 'right',
    },
    itemsList: {
        backgroundColor: '#eeeeee',
    },
    itemsListContainer: {
        backgroundColor: '#eeeeee',
        paddingVertical: 8,
        marginHorizontal: 8,
    },
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
