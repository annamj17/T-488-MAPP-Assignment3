import React from 'react';
import { FlatList, View, Text, Image } from 'react-native';
import { ListItem } from 'react-native-elements';


const RenderAllMovies = ({ pressedMovies, onPress }) => {
    return (
        // <Text> {console.log("RENDERALL: ",pressedMovies.title)}</Text>
        <View>
            <FlatList
                data={pressedMovies}
                renderItem={({ item: { id, title, releaseYear, poster, onPress }, index }) => (
                    <ListItem
                        title={title}
                        subtitle={releaseYear}
                        index={index}
                        //subtitle={website}
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
