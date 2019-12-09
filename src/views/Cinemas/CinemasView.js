import React from 'react';
import { StyleSheet, View, Text, ActivityIndicator, FlatList } from 'react-native';

class CinemasView extends React.Component {
    constructor(props) {
        super(props);
        this.state ={ isLoading: true, clientToken: false, loaded: false }
    }
    
    componentDidMount() { 
        fetch('http://api.kvikmyndir.is/authenticate', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: 'arnara',
                password: 'Abc.123'
            })
        })
      .then((response) => response.json())
      .then((responseData) => {
          console.log(responseData);
        this.setState({
          clientToken: responseData.access_token,
        });
      })
    }
    
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