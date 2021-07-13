import React from "react";
import { List } from "native-base"
import { Text, View } from "react-native";
import { useSelector } from "react-redux";
import { Spinner } from "native-base";
import { SHOP_DETAIL } from "../Navigation/types"
const ShopItem = ({ shop, navigation }) => {


    return (

        <Text onPress={() => navigation.navigate(SHOP_DETAIL, { shop })}>
            {shop.name}</Text>


    )
}
export default ShopItem