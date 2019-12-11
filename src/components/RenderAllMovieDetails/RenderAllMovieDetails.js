import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';

const RenderAllMovieDetails = ({ pressedMovie: { title, poster, year, plot, durationMinutes, genres }}) => {
    return (
      <View>
        <Text style={styles.header}> {title} </Text>
        <Image source={{ uri:poster }} />
        <Text> {plot} </Text>
        <Text style={styles.marginStyle}> {durationMinutes} min</Text>
        <Text> Release Year: {year} </Text>
        {/* <Text> {genres} </Text> */}
		 </View>
    );
}

export default RenderAllMovieDetails;
