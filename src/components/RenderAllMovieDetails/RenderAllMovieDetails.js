import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { Rating } from 'react-native-ratings';
import styles from './styles';

const RenderAllMovieDetails = ({
	pressedMovieWithShowTime: { title, poster, year, plot, durationMinutes, genres, ratings, showtimes } }) => {
	return (
		<View style={styles.content}>
			<Text style={styles.header}> {title} </Text>
			<ImageBackground style={{ width: '100%', height: 250 }} source={{ uri: poster }}>
			</ImageBackground>
			<View style={styles.textContent}>
				<Text> {plot} </Text>
				<View>
					<View style={styles.rating}>
						<Text style={styles.ratingText} > IMDB </Text>
						<Rating
							type='star'
							startingValue={Number(ratings.imdb)}
							ratingColor='#f1c40f'
							ratingBackgroundColor='#c8c7c8'
							ratingCount={10}
							imageSize={10}
							fraction={1}
							style={styles.ratingStars}
						/>
						<Text style={styles.ratingNumbers}> {ratings.imdb} </Text>
					</View>
					<View>
						<Text style={styles.info}> Lengd     : {durationMinutes} mín</Text>
						<Text style={styles.info}> Utgáfuár : {year} </Text>
					</View>
				</View>
			</View>
			{/* <Text> {genres} </Text> */}
		</View>
	);
}

export default RenderAllMovieDetails;
