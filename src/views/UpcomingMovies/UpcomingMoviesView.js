import React from 'react';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import RenderUpcomingMovies from '../../components/RenderUpcomingMovies';


class UpcomingMoviesView extends React.Component {

	static navigationOptions = {
		headerTitle: 'Upcoming Movies',
		headerTitleStyle: {
			fontWeight: 'bold',
			fontSize: 20
		},
	};

	constructor(props) {
		super(props);
		this.state = {
		};
	}

	render() {
		console.log(this.props.upcomingMovies.releasedateIS);
		return (
			<View style={styles.screens}>
				<RenderUpcomingMovies
					upcomingMovieData={this.props.upcomingMovies}
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
		upcomingMovies: reduxStoreState.upComingMovie
	}
};

export default connect(mapStateToProps)(UpcomingMoviesView);

