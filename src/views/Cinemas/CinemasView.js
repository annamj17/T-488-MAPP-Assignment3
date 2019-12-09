import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

class CinemasView extends React.Component {

    render () {

        return (
            <View style={styles.screens}>
                <Text>Whhhooooop!</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    screens: {
        flex: 1
    }
});

export default CinemasView;