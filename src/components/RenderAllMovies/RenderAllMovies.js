import React from 'react';
import { FlatList, View, Text, Image } from 'react-native';
import { ListItem } from 'react-native-elements';

const RenderAllMovies = ({ title, poster, plot, durationMinutes, year, onPress }) => {
    return (
        <View>
            <Text> {console.log(title)} </Text>
            {/* <Image> {poster} </Image>
            <Text> {plot} </Text>
            <Text> {durationMinutes} </Text>
            <Text> {year} </Text>
            <Text> {} </Text> */}
        </View>
    );
}

export default RenderAllMovies;