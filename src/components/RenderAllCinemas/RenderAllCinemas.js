import React from 'react';
import { FlatList, View } from 'react-native';
import { ListItem } from 'react-native-elements';

const RenderAllCinemas = ({ cinemasData, onPress }) => {
    return (
        <View>
            <FlatList
                data={cinemasData}
                renderItem={({ item: { name, website }, index }) => (
                    <ListItem
                        title={name}
                        index={index}
                        subtitle={website}
                        // leftAvatar={{
                        //     source: { uri: imageUri },
                        //     size: "large",
                        //     containerStyle: { marginTop: 5 }
                        // }}
                        bottomDivider
                        chevron
                        onPress={() => onPress(name)}
                    />
                )}
                keyExtractor={item => item.name.toString()}
            />
        </View>
    );
}

export default RenderAllCinemas;