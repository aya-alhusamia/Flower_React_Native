import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import ProductList from '../ProductList'

const shopDetail = ({ route }) => {

    const { shop } = route.params
    console.log(shop);
    return (
        <View>
            <Text style={{ fontSize: 25 }} >{shop.name}</Text>
            <Image style={styles.image} source={{ uri: shop.image }} />

            <ProductList products={shop.products} />

        </View>
    )
}

export default shopDetail;

const styles = StyleSheet.create({
    image: {
        width: 150,
        height: 150,
    },
})