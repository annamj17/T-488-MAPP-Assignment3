import React from 'react';
import { FlatList, View } from 'react-native';
import { ListItem } from 'react-native-elements';

const RenderUpcomingMovies = ({ movieData, extraData }) => {

	return (
		<View>
			<FlatList
				data={movieData}
				renderItem={({ item: { id, name, website }, index }) => (
					<ListItem
						title={name}
						index={index}
						subtitle={website}
						bottomDivider
						chevron

					/>
				)}
				keyExtractor={({ id }) => id.toString()} />
		</View>
	);
}
export default RenderUpcomingMovies;