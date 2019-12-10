import * as React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs'

import CinemasView from '../views/Cinemas/CinemasView';
import CinemasDetailView from '../views/CinemasDetail/CinemasDetailView';
import UpcomingMoviesView from '../views/UpcomingMovies/UpcomingMoviesView'
import { Icon } from 'react-native-elements';

const HomeStack = createStackNavigator(
	{
		CinemasView: CinemasView,
		CinemasDetailView: CinemasDetailView
	},
	{
		defaultNavigationOptions: {
			headerStyle: {
				height: 70,
				backgroundColor: '#087E8B',
				elevation: 0, //Remove shadow from android
				shadowOpacity: 0, //Remove shadow from ios
				borderBottomWidth: 0,
			},
			headerTitleStyle: {
				fontWeight: 'bold',
				fontSize: 20
			},
			headerBackTitle: "#0B3954",
			headerTintColor: '#F9F9F9'
		}
	}
);


const App = createBottomTabNavigator({
	Home: { screen: HomeStack },
	Upcoming: { screen: UpcomingMoviesView }
},
	{
		initialRouteName: 'Home',
		defaultNavigationOptions: ({ navigation }) => ({
			tabBarIcon: ({ tintColor }) => {
				let { routeName } = navigation.state;
				let iconName = 'rocket';
				if (routeName == 'Home') {
					iconName = 'film';
				}
				else if (routeName === "Upcoming") {
					iconName = 'calendar';
				}
				return (<Icon
					color={`${tintColor}`}
					name={`${iconName}`}
					type='font-awesome'
					size={25}
				/>
				)
			}
		}),
		tabBarOptions: {
			activeBackgroundColor: '#087E8B',
			inactiveBackgroundColor: '#087E8B',
			activeTintColor: '#F9F9F9',
			inactiveTintColor: '#0B3954',
			headerBackTitle: "#0B3954",
			style: { height: 70 },
			labelStyle: {
				margin: 0,
				fontSize: 16,
			}
		},
	});

export default createAppContainer(App);