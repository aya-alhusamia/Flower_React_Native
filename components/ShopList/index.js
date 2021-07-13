import React from "react";
import { List } from "native-base";
import ShopItem from "./ShopItem";
import { Box } from "native-base"
import { Spinner, Center } from "native-base";
import { useSelector } from "react-redux";
import { Text } from "react-native";

const ShopList = ({ navigation }) => {
    const loadingShop = useSelector((state) => state.shops.loading);
    const shops = useSelector((state) => state.shops.shops);
    if (loadingShop) return <Spinner />
    const shopList = shops.map((shop) => (
        <ShopItem shop={shop} key={shop.id} navigation={navigation} />
    ))


    return (
        <Center flex={1}>
            <Box w="95%">
                <Text>Shop List</Text>
                <List space={2}>{shopList}</List>
            </Box>
        </Center>


    )
}
export default ShopList