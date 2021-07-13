import React from "react";
import { List } from "native-base";
import ProductItem from "./ProductItem";
import { Center, Box } from "native-base"
import { Text } from "react-native";
const ProductList = ({ products }) => {
    // const products = useSelector((state) => state.products.products); 
    const productList = products.map((product) => (
        <ProductItem product={product} key={product.id} />
    ))


    return (
        <Center flex={1}>
            <Box w="70%">
                <Text>Product List</Text>
                <List>{productList}</List>
            </Box>
        </Center>

    )
}
export default ProductList