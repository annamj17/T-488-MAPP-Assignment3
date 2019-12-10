import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { navigationOptions } from 'react-navigation';

import RenderUpcomingMovies from '../../components/RenderUpcomingMovies'


class UpcomingMoviesView extends React.Component {

	componentDidMount() {
		this.props.getCinemas();
	};
	// static navigationOption = {
	// 	title: 'UpcomingMoviesView'
	// }

	render() {
		return (
			<View style={styles.screens}>
				<Text> RenderUpcomingMovies </Text>
				{/* <RenderUpcomingMovies
					movieData={this.props.cinemas}
				/> */}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	screens: {
		flex: 1
	}
});


export default UpcomingMoviesView;