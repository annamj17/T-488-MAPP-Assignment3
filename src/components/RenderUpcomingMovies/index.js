import React from 'react';
import { FlatList, View } from 'react-native';
import { ListItem } from 'react-native-elements';

const RenderUpcomingMovies = ({ movieData, extraData }) => {

	return (
		<View>
			<FlatList>
				data={movieData}
				extraData={extraData}
				renderItem={({ item: { name } })} => (
					<ListItem
					title={name}
				/>
				)
				keyExtractor={item.id.toString()}
			</FlatList>
		</View>
	);
}
export default RenderUpcomingMovies;