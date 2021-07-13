import React from "react";
import { List } from "native-base";
import CartItem from "./CartItem";
import { Box } from "native-base"
import { Spinner, Center } from "native-base";
import { useSelector } from "react-redux";
import { Text } from "react-native";

const CartList = () => {
    const items = useSelector((state) => state.items.items);
    const products = useSelector((state) => state.products.products);
    const itemList = items
        .map((item) => ({
            ...products.find((product) => product.id === item.itemId),
            quantity: item.quantity
        }))
        .map((item) => <CartItem item={item} key={item.id} />)


    return (
        <Center flex={1}>
            <Box w="95%">
                <Text>Item List</Text>
                <List space={2} my={2}>{itemList}</List>
            </Box>
        </Center>


    )
}
export default CartList