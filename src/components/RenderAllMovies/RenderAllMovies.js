import React from 'react';
import { FlatList, View, Text, Image } from 'react-native';
import { ListItem } from 'react-native-elements';


const RenderAllMovies = ({ pressedMovies, onPress }) => {
	{
		// for (let i = 0; i < pressedMovies.length; i++) {
		// 	let genresArray = pressedMovies[i].genres;

		// 	for (let j = 0; j < genresArray.length; j++) {
		// 		console.log(genresArray[j].Name);

		// 	}
		// }


		// var test = pressedMovies.genres.filter(genres => { genres.Name })
		// console.log(test)
	}
	return (
		// <Text> {console.log("RENDERALL: ",pressedMovies.title)}</Text>

		<View>
			<FlatList
				data={pressedMovies}
				renderItem={({ item: { id, title, genres, year, poster }, index }) => (

					<ListItem
						title={title}
						index={index}
						rightElement={year}
						subtitle={genres[0].Name ? genres[0].Name : ""}
						// rightSubtitle={genres}
						leftAvatar={{
							source: { uri: poster },
							size: "large",
							containerStyle: { marginTop: 5 }
						}}
						bottomDivider
						chevron
						onPress={() => onPress(id)}
					/>
				)}
				keyExtractor={({ id }) => id.toString()}
			// keyExtractor={item => item.id.toString()}
			/>
		</View>
	);
}
export default RenderAllMovies;
