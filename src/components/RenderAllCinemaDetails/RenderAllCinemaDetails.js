import React from 'react';
import { FlatList, View, Text } from 'react-native';
import { ListItem } from 'react-native-elements';

const RenderAllCinemaDetails = ({ name, description, address, city, phone, website, onPress }) => {
    return (
      <View>
			  <Text> {name} </Text>
        <Text> {description} </Text>
        <Text> {address} </Text>
        <Text> {city} </Text>
        <Text> {phone} </Text>
        <Text> {website} </Text>
		 </View>
    );
}

export default RenderAllCinemaDetails;