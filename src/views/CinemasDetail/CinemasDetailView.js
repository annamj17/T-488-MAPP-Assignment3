import React from 'react';
import { View, ScrollView, Text, TouchableHighlight, TouchableOpacity, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { getCinemas } from '../../actions/cinemaActions';
import RenderAllCinemaDetails from '../../components/RenderAllCinemaDetails/RenderAllCinemaDetails';
import RenderAllMovies from '../../components/RenderAllMovies/RenderAllMovies';
import movieView from '../../views/Movie/movieView';
import styles from './styles';

const CinemasDetailView = ({ pressedCinema, pressedMovies, navigation: { navigate, getParam }, onPress }) => {
	return (
		<ScrollView>
			<RenderAllCinemaDetails {...pressedCinema} />
			<RenderAllMovies pressedMovies={pressedMovies}
				onPress={id => navigate('movieView', { id: id, cinemaId: getParam('id', 0) })}
			/>
		</ScrollView>
	)
}

const mapStateToProps = (reduxStoreState, myProps) => {

	const { cinema, movie } = reduxStoreState;
	const { navigation } = myProps;
	const cinemaIdent = navigation.getParam('id', 0);
	const pressedCinema = cinema.find(c => c.id === cinemaIdent)
	const pressedMovies = movie.filter(m => {
		return m.showtimes.some(s => s.cinema.id === cinemaIdent)
	}).map(m => {
		return {
			id: m.id,
			title: m.title,
			genres: m.genres,
			poster: m.poster,
			year: m.year,
			ratings: m.ratings
		};
	});
	return {
		pressedCinema,
		pressedMovies
	}
};

export default connect(mapStateToProps)(CinemasDetailView);

