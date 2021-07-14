import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { Icon, Text } from "native-base";

import { useSelector } from "react-redux";
import { CART_LIST } from "../Navigation/types";

const CartButton = ({ navigation }) => {
    const items = useSelector((state) => state.items.items);
    let total = 0;
    items.forEach((e) => (total += e.quantity));
    return (
        <>
            <Text>{total}</Text>
            <Icon
                as={AntDesign}
                name="shoppingcart"
                color="red"
                onPress={() => navigation.navigate(CART_LIST)}
            />
        </>
    );
};
export default CartButton;