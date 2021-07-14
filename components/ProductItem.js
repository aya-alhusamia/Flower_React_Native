import React, { useState } from "react";
import NumericInput from "react-native-numeric-input";
import { List, Button } from "native-base";
import { PRODUCT_DETAIL } from "./Navigation/types"
import { useDispatch } from "react-redux";
import { addItemToCart } from "../store/action/cartAction";
import { TouchableOpacity, Text, View } from "react-native";


const ProductItem = ({ product, navigation }) => {
    const dispatch = useDispatch()
    const [quantity, setQuantity] = useState(1);
    const handleAdd = () => {
        const newItem = { quantity, itemId: product.id };
        dispatch(addItemToCart(newItem))

    };


    return (
        <View>
            <Text
                onPress={() => navigation.navigate(PRODUCT_DETAIL, { product })}
            >
                {product.name}</Text>


            <NumericInput
                value={quantity}
                onChange={setQuantity}
                initValue={quantity}
                minValue={1}
                onLimitReached={(isMax, msg) => console.log(isMax, msg)}
                totalWidth={240}
                totalHeight={50}
                iconSize={25}
                step={1}
                valueType='real'
                rounded
                textColor='#B0228C'
                iconStyle={{ color: 'white' }}
                rightButtonBackgroundColor='#EA3788'
                leftButtonBackgroundColor='#E56B70'
            />

            <Button onPress={handleAdd} >
                Add
            </Button>

        </View>
    )
}
export default ProductItem