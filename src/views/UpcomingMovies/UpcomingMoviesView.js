import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { connect } from 'react-redux';
import { navigationOptions } from 'react-navigation';
import { getCinemas } from '../../actions/cinemaActions';
import RenderUpcomingMovies from '../../components/RenderUpcomingMovies';


class UpcomingMoviesView extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		};
	}
	componentDidMount() {
		this.props.getCinemas();
	};
	static navigationOptions = {
		headerTitle: 'Upcoming Movies',
		headerStyle: {
			height: 70,
			backgroundColor: '#087E8B',
		},
		headerTitleStyle: {
			fontWeight: 'bold',
			fontSize: 20
		},
		headerBackTitle: "back",
		headerTintColor: '#fff',

	}

	render() {
		return (
			<View style={styles.screens}>
				<Text> RenderUpcomingMovies </Text>
				<RenderUpcomingMovies
					movieData={this.props.cinemas}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	screens: {
		flex: 1
	}
});

const mapStateToProps = (reduxStoreState) => {
	return {
		cinemas: reduxStoreState.cinema.sort((a, b) => a.name.localeCompare(b.name, 'is')),
	}
};

export default connect(mapStateToProps, { getCinemas })(UpcomingMoviesView);

