import React from "react";

import { Text, View } from "react-native";
import { PRODUCT_DETAIL } from "./Navigation/types"
const ProductItem = ({ product, navigation }) => {

    return (
        <View>
            <Text
                onPress={() => navigation.navigate(PRODUCT_DETAIL, { product })}
            >
                {product.name}</Text>
        </View>
    )
}
export default ProductItem