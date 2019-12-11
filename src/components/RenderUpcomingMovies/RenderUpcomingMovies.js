import React from 'react';
import { FlatList, View } from 'react-native';
import { ListItem } from 'react-native-elements';

const RenderUpcomingMovies = ({ upcomingMovieData }) => {

	return (
		<View>
			<FlatList
				data={upcomingMovieData}
				renderItem={({ item: { title, releaseDateIS, poster }, index }) => (
					<ListItem
						title={title}
						index={index}
						subtitle={releaseDateIS}
						leftAvatar={{
							source: { uri: poster },
							size: "large",
							containerStyle: { marginTop: 5 }
						}}
						bottomDivider
					/>
				)}
				keyExtractor={({ id }) => id.toString()} />
		</View>
	);
}
export default RenderUpcomingMovies;