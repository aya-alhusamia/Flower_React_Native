import React from "react"
import { createStackNavigator } from '@react-navigation/stack';
import * as types from "./types"
//Components 
import Home from "../Home";
import ShopList from '../ShopList';
import ShopDetail from "../ShopDetail"
import ProductList from "../ProductList"
import ProductDetail from "../ProductDetail"
import CartButton from "../Cart/CartButton"
import CartList from "../Cart/CartList";

const RootNavigator = () => {
    const { Navigator, Screen } = createStackNavigator();
    return (
        <Navigator initialRouteName={types.Home} screenOptions={{
            headerStyle: { backgroundColor: "black" },
            headerTintColor: "white",
            headerTitleStyle: { fontStyle: "italic", fontWeight: "bold" }
        }}>
            <Screen name={types.Home}
                component={Home}
                options={{ headerShown: false }} />
            <Screen name={types.SHOP_LIST}
                component={ShopList}
                options={{ title: "Shops" }} />
            <Screen name={types.SHOP_DETAIL}
                component={ShopDetail}
                options={({ route, navigation }) => ({
                    title: route.params.shop.name,
                    headerRight: () => <CartButton navigation={navigation} />
                })} />
            <Screen name={types.PRODUCT_LIST}
                component={ProductList}
                options={{ title: "Products" }}
            />
            <Screen name={types.CART_LIST} component={CartList} options={{ title: "Carts" }} />
            <Screen
                name={types.PRODUCT_DETAIL}
                component={ProductDetail}
                options={({ route }) => {
                    return { title: route.params.product.name };
                }}
            />
        </Navigator>
    )
}
export default RootNavigator