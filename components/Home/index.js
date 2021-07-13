import { StatusBar } from 'expo-status-bar';
import { Center, Button } from 'native-base';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground } from 'react-native';
// import { HomeImg } from './styles';
import { SHOP_LIST } from "../Navigation/types"

export default function Home({ navigation }) {
    return (
        <View style={styles.container}>
            <Center flex={1}>
                <ImageBackground style={styles.image} source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1rF8_-ubWNdgu3ks_pmfwO1VRp7TMxzzfmg&usqp=CAU" }}>
                    <Text style={{ fontSize: 50, color: "white", marginTop: 100, textAlign: "center", fontWeight: "bold" }}>Flower Shop</Text>

                    <TouchableOpacity
                        color="#f194ff"
                        onPress={() => navigation.navigate(SHOP_LIST)}
                    >
                        <Text style={{ fontSize: 50, color: "white", marginTop: 100, textAlign: "center", fontWeight: "bold" }}> ShopList</Text>
                    </TouchableOpacity>
                    <StatusBar style="auto" />
                </ImageBackground>

            </Center>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 500,
        height: 800
    },

});
