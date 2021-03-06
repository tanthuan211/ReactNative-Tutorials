// https://reactnavigation.org/docs/en/hello-react-navigation.html
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

import Tab1Screen from './Tab1Screen';
import Tab2Screen from './Tab2Screen';
import Tab3Screen from './Tab3Screen';
import Tab4Screen from './Tab4Screen';
import NewsStackNavigator from './NewsStackNavigator';

// Screens
const RouteConfigs = {
	// RouteName:
	Tab1Screen: {
		screen: Tab1Screen, // Component
		navigationOptions: ({ navigation }) => ({
			title: 'Home',
			tabBarIcon: ({ focused, horizontal, tintColor }) => {
				return <Icon color={tintColor} name='home' size={focused ? 24 : 24} />;
			},
		}),
	},
	// RouteName:
	Tab2Screen: {
		screen: NewsStackNavigator, //Tab2Screen, // Component
		navigationOptions: ({ navigation }) => ({
			title: 'News',
			tabBarIcon: <Icon color='#bdc3c7' name='earth' size={20} />, //React Element
		}),
	},
	// RouteName:
	Tab3Screen: {
		screen: Tab3Screen, // Component
		navigationOptions: ({ navigation }) => ({
			title: 'Account',
			// tabBarVisible: false,
			tabBarIcon: <Icon color='#bdc3c7' name='account' size={20} />, //React Element
		}),
	},
	// RouteName:
	Tab4Screen: {
		screen: Tab4Screen, // Component
		navigationOptions: ({ navigation }) => ({
			title: 'Logout',
			tabBarIcon: <Icon color='#bdc3c7' name='close' size={20} />, //React Element
		}),
	},
};

const BottomTabNavigatorConfig = {
	defaultNavigationOptions: {},
	tabBarOptions: {
		style: { backgroundColor: '#6F1E51' },
		tabStyle: { height: 54, justifyContent: 'flex-start' },
		labelStyle: {
			fontWeight: '700',
		},
		activeTintColor: 'yellow',
		inactiveTintColor: '#bdc3c7',
		// activeBackgroundColor: 'yellow',
		inactiveBackgroundColor: '#6F1E51',
		showLabel: true,
		showIcon: true,
	},
};

const TabNavigator = createBottomTabNavigator(RouteConfigs, BottomTabNavigatorConfig);
export default TabNavigator;
// export default createAppContainer(TabNavigator);
