import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import CustomDrawer from './CustomDrawer';

const Tabs = createBottomTabNavigator();

const TabNavigation = () => {
  return (
      <Tabs.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
        }}>
        <Tabs.Screen name="Home" component={Home} />
        <Tabs.Screen name="Profile" component={Profile} />
      </Tabs.Navigator>
  );
};

export default TabNavigation;

const styles = StyleSheet.create({});