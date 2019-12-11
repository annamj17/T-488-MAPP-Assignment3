import React from 'react';
import { View, Text, StyleSheet, WebView, Platform } from 'react-native';
import { connect } from 'react-redux';
import RenderAllMovieDetails from '../../components/RenderAllMovieDetails/RenderAllMovieDetails';

const movieView = ({ pressedMovie }) => {
	console.log(pressedMovie.trailers[0].results[0].url);

	return (
		<View>
			<View>
				<RenderAllMovieDetails pressedMovie={pressedMovie} />
			</View>
			<View style={{ height: 300 }}>
				<WebView
					style={styles.WebViewContainer}
					javaScriptEnabled={true}
					domStorageEnabled={true}
					source={{ uri: pressedMovie.trailers[0].results[0].url }}
				/>
			</View>
		</View>
	);
}

const mapStateToProps = (reduxStoreState, myProps) => {
	const { movie } = reduxStoreState;
	const { navigation } = myProps;
	const movieIdent = navigation.getParam('id', 0);
	const pressedMovie = movie.find(c => c.id === movieIdent)
	return {
		pressedMovie
	}
};

const styles = StyleSheet.create({

	WebViewContainer: {
		marginTop: (Platform.OS == 'android') ? 20 : 0,
	}
});

export default connect(mapStateToProps)(movieView);