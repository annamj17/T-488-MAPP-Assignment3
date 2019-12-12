import React from 'react';
import { ScrollView, View, StyleSheet, WebView, Platform } from 'react-native';
import { connect } from 'react-redux';
import RenderAllMovieDetails from '../../components/RenderAllMovieDetails/RenderAllMovieDetails';

const movieView = ({ pressedMovieWithShowTime, trailers }) => {

	return (
		<ScrollView>
			<View>

				<RenderAllMovieDetails
					pressedMovieWithShowTime={pressedMovieWithShowTime}
					movieSchedules={movieSchedules} />

			</View>
			<View style={{ height: 500, }}>
				{
					trailers.map(t => <WebView
						key={t.id}
						style={styles.WebViewContainer}
						javaScriptEnabled={true}
						domStorageEnabled={true}
						source={{ uri: t.url }}
					/>)
				}
			</View>
		</ScrollView>
	)
}

const mapStateToProps = (reduxStoreState, myProps) => {
	const { movie } = reduxStoreState;
<<<<<<< HEAD
	const { navigation } = myProps;
	const movieIdent = navigation.getParam('id', 0);
	const cinemaIdent = navigation.getParam('cinemaId', 0);
	const pressedMovie = movie.find(c => c.id === movieIdent);
	const showtimes = pressedMovie.showtimes.find(s => s.cinema.id === cinemaIdent);
	const pressedMovieWithShowtime = { ...pressedMovie, showtimes }
	const trailer = pressedMovie.trailers.find(trailer => {
		return trailer.results.length > 0;
	});

	return {
		pressedMovieWithShowtime,
		trailers: trailer ? trailer.results : null,
=======
    const { navigation } = myProps;
    const movieIdent = navigation.getParam('id', 0);
    const cinemaIdent = navigation.getParam('cinemaId', 0);
    const pressedMovie = movie.find(c => c.id === movieIdent);
    const showtimes = pressedMovie.showtimes.find(s => s.cinema.id === cinemaIdent);
    const pressedMovieWithShowtime = {...pressedMovie, showtimes}
    const trailer = pressedMovie.trailers.find(trailer => {
		return trailer.results.length > 0;
    return {
        pressedMovieWithShowtime,
      	trailers: trailer ? trailer.results : null,
>>>>>>> 8bbf76d1835b5abcf89dda696943347f0da95d6c
	}
};
const styles = StyleSheet.create({

	WebViewContainer: {
		marginTop: (Platform.OS == 'android') ? 20 : 0,
	}
});


export default connect(mapStateToProps)(movieView);