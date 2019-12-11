import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

const RenderAllCinemaDetails = ({ name, description, address, city, phone, website }) => {
    return (
      <View>
			  <Text style={styles.header}> {name} </Text>
        <Text> {description} </Text>
        <Text style={styles.addressStyle}> {address} </Text>
        <Text> {city} </Text>
        <Text> S: {phone} </Text>
        <Text> {website} </Text>
		 </View>
    );
}

export default RenderAllCinemaDetails;