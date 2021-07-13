import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from "react-redux";
import { NativeBaseProvider } from 'native-base';
import store from "./store";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from './components/Navigation';

export default function App() {
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <NavigationContainer >
          <RootNavigator />
        </NavigationContainer>
        <StatusBar style="auto" />
      </NativeBaseProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
