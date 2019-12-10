import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { getCinemas } from '../../actions/cinemaActions';
import RenderAllCinemaDetails from '../../components/RenderAllCinemaDetails/RenderAllCinemaDetails';
import RenderAllMovies from '../../components/RenderAllMovies/RenderAllMovies';

const CinemasDetailView = ({ pressedCinema, pressedMovies }) => {

    return (
        <View>
            <RenderAllCinemaDetails {...pressedCinema} />
            <RenderAllMovies pressedMovies={pressedMovies} />
        </View>
    )
}

const mapStateToProps = (reduxStoreState, myProps) => {
    const { cinema } = reduxStoreState;
    const { navigation } = myProps;
    const cinemaIdent = navigation.getParam('id', 0);
    const pressedCinema = cinema.find(c => c.id === cinemaIdent)
    const pressedMovies = reduxStoreState.movie.filter(m => {
            return m.showtimes.some(s => s.cinema.id === cinemaIdent)
        }).map(m => {
            return {
                id: m.id,
                title: m.title
            };
        })
    // console.log("MOVIES", movie);
    return {
        pressedCinema,
        pressedMovies
        // movies: reduxStoreState.movie.filter(m => {
        //     return m.showtimes.some(s => s.cinema.id === cinemaIdent)
        // }).map(m => {
        //     return {
        //         id: m.id,
        //         title: console.log(m.title)
        //     };
        // })
    }

};

export default connect(mapStateToProps)(CinemasDetailView);
