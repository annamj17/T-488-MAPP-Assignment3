import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import RenderAllMovieDetails from '../../components/RenderAllMovieDetails/RenderAllMovieDetails';

const movieView = ({ pressedMovie }) => {

    return (
        <View>
            <Text>HALLO!!!</Text>
            <RenderAllMovieDetails  pressedMovie={console.log("PRESSED MOVIE: ", pressedMovie)} />
            {/* <RenderAllMovieDetails pressedMovie={console.log("PRESSED:",pressedMovie)} /> */}
        </View>
    )
}

const mapStateToProps = (reduxStoreState, myProps) => {
    const { movie } = reduxStoreState;
    const { navigation } = myProps;
    const movieIdent = navigation.getParam('id', 0);
    const pressedMovie = movie.find(c => c.id === movieIdent)
    return {
        pressedMovie
    }
};

export default connect(mapStateToProps)(movieView);