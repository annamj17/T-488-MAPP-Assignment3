import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { getAuthenticatoin } from '../../services/Authentication';

class CinemasView extends React.Component {

    constructor(props) {
        super(props);
    }
    
    componentDidMount() { 
        // getAuthenticatoin();
    };
    
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