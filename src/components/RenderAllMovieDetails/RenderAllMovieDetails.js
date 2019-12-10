import React from 'react';
import { FlatList, View, Text } from 'react-native';
import { ListItem } from 'react-native-elements';

const RenderAllMovieDetails = ({ title, poster, releaseYear, plot, onPress }) => {
    return (
      <View>
			  <Text> {title} </Text>
        <Text> {plot} </Text>
        <Text> {releaseYear} </Text>
		 </View>
    );
}

export default RenderAllMovieDetails;