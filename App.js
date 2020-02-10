import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';

import { 
  createAppContainer
} from 'react-navigation';

import { createStackNavigator } from 'react-navigation-stack';

import HotelsScreen from './screens/Hotels';
import HotelDetailsScreen from './screens/HotelDetails';

const HotelStack = createStackNavigator(
    {
      Hotels: {
        screen: HotelsScreen,
        navigationOptions:{
          headerTintColor: 'rgba(255, 255, 255,1)',
          headerStyle: {
            backgroundColor: 'rgba(227, 0, 122,1)'
          }
        } 
      },
      HotelDetails: {
        screen: HotelDetailsScreen,
        navigationOptions:{
          headerTintColor: 'rgba(255, 255, 255,1)',
          headerStyle: {
            backgroundColor: 'rgba(227, 0, 122,1)'
          }
        }
      },
    },
    {
      initialRouteName: 'Hotels'
    }
);

const App = createAppContainer(HotelStack);

export default App;