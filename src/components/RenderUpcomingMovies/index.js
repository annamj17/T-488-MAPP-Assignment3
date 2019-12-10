import React from 'react';
import { FlatList, View } from 'react-native';
import { ListItem } from 'react-native-elements';

const RenderUpcomingMovies = ({ upcomingMovieData }) => {

	return (
		<View>
			<FlatList
				data={upcomingMovieData}
				renderItem={({ item: { id, title, releasedateIS, poster }, index }) => (
					<ListItem
						id={id}
						title={title}
						index={index}
						subtitle={releasedateIS}
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