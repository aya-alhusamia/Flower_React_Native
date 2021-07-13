import React from "react"
import { Icon } from "native-base"
import { AntDesign } from "@expo/vector-icons"
import { CART_LIST } from "../Navigation/types"

const CartButton = ({ navigation }) => {
    return <Icon
        as={AntDesign}
        name="shoppingcart"
        color="white"
        onPress={() => navigation.navigate(CART_LIST)} />
}
export default CartButton