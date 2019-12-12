import React from 'react';
import { ScrollView, View, StyleSheet, WebView, Platform } from 'react-native';
import { connect } from 'react-redux';
import RenderAllMovieDetails from '../../components/RenderAllMovieDetails/RenderAllMovieDetails';

const movieView = ({ pressedMovieWithShowTime, trailers, movieSchedules }) => {
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
	const { navigation } = myProps;
	const movieIdent = navigation.getParam('id', 0);
	//Get cinema ID
	const cinemaIdent = navigation.getParam('cinemaId', 0);
	const pressedMovie = movie.find(c => c.id === movieIdent)
	//Get array of all trailers
	const trailer = pressedMovie.trailers.find(trailer => {
		console.log('trailer', trailer);
		console.log('trailer.results', trailer.results);
		return trailer.results.length > 0;
	});
	//First get the right movie in the right cinema
	const showtimes = pressedMovie.showtimes.filter(s => s.cinema.id === cinemaIdent);


	console.log("Showtimes", showtimes);
	console.log("Showtimes.schedule", showtimes.schedule);

	//Get array of all schedules
	//console.log(showtimes[0].schedule);
	// const movieSchedules = showtimes.schedule.filter(m => {
	// 	console.log('movieSchedules', m)
	// 	return m.length > 0;
	// })

	const pressedMovieWithShowTime = { ...pressedMovie, showtimes }
	console.log("pressedMovieWithShowTimes", pressedMovieWithShowTimes);
	return {
		pressedMovieWithShowTime,
		trailers: trailer ? trailer.results : null,
		//movieSchedules: movieSchedules ? movieSchedules.schedule : null
	}
};
const styles = StyleSheet.create({

	WebViewContainer: {
		marginTop: (Platform.OS == 'android') ? 20 : 0,
	}
});


export default connect(mapStateToProps)(movieView);