import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native'
import { HStack } from 'native-base'

const CartItem = ({ item }) => {
    return (
        <HStack w="100%" justifyContent="space-between" alignItems="center" >
            <Text>{item.name}</Text>
            <Text>Quantity{item.quantity}</Text>
            <Text>{item.price * item.quantity}JD</Text>
        </HStack>
    )
}

export default CartItem