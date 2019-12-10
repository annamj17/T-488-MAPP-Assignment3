import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import RenderAllMovieDetails from '../../components/RenderAllMovieDetails/RenderAllMovieDetails';

const movieView = ({ pressedMovie }) => {

    return (
        <View>
            <RenderAllMovieDetails pressedMovie={pressedMovie} />
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