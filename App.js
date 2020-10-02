import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TransactionScreen from "./screens/TransactionScreen";
import SearchScreen from "./screens/SearchScreen";
import {createAppContainer } from 'react-navigation';
import { createBottomTabNavigator} from 'react-navigation-tabs';

export default class App extends React.Component {
render(){
  return(
    <AppContainer/>
  )
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightGrey',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const TabNavigator = createBottomTabNavigator({
  Search: {screen:SearchScreen},
  Transaction: {screen: TransactionScreen} 
})

const AppContainer = createAppContainer(TabNavigator);
