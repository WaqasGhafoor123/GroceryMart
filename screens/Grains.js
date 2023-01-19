/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { Product } from './Product';
import { getProducts } from '../services/ProductsService';
import {ProductDetails} from '../screens/ProductDetails';
export default function Grains({ navigation }) {
    function renderProduct({ item: product }) {
        if (product.id > 100 && product.id < 200) {
            return (
                <Product
                    {...product}
                    onPress={() => {
                        navigation.navigate('ProductDetails', {params:{productId: product.id}});
                    }}
                />
            );
        }
    }

    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts(getProducts());
    });

    return (
        <FlatList
            style={styles.productsList}
            contentContainerStyle={styles.productsListContainer}
            keyExtractor={item => item.id.toString()}
            data={products}
            renderItem={renderProduct}
        />
    );
}
const styles = StyleSheet.create({
    productsList: {
        backgroundColor: '#eeeeee',
    },
    productsListContainer: {
        backgroundColor: '#eeeeee',
        paddingVertical: 8,
        marginHorizontal: 8,
    },
});
