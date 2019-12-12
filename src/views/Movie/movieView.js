import React from 'react';
import { View, StyleSheet, WebView, Platform } from 'react-native';
import { connect } from 'react-redux';
import RenderAllMovieDetails from '../../components/RenderAllMovieDetails/RenderAllMovieDetails';

const movieView = ({ pressedMovieWithShowtime }) => {
	return (
		<View>
			<View>
                <RenderAllMovieDetails pressedMovieWithShowtime={pressedMovieWithShowtime} />
			</View>
			{/* {hasTrailer
				?
				<View style={{ height: 300 }}>
					<WebView
						style={styles.WebViewContainer}
						javaScriptEnabled={true}
						domStorageEnabled={true}
						source={{ uri: pressedMovie.trailers[0].results[0].url }}
					/>
				</View>
				:
				<View />
			} */}
		</View>
	)
}

const mapStateToProps = (reduxStoreState, myProps) => {
	const { movie } = reduxStoreState;
    const { navigation } = myProps;
    const movieIdent = navigation.getParam('id', 0);
    const cinemaIdent = navigation.getParam('cinemaId', 0);
    const pressedMovie = movie.find(c => c.id === movieIdent);
    const showtimes = pressedMovie.showtimes.find(s => s.cinema.id === cinemaIdent);
    const pressedMovieWithShowtime = {...pressedMovie, showtimes}
    
    return {
        pressedMovieWithShowtime
	}
};
const styles = StyleSheet.create({

	WebViewContainer: {
		marginTop: (Platform.OS == 'android') ? 20 : 0,
	}
});


export default connect(mapStateToProps)(movieView);