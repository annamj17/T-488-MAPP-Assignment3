import React from 'react';
import { View, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { getCinemas } from '../../actions/cinemaActions';
import RenderAllCinemaDetails from '../../components/RenderAllCinemaDetails/RenderAllCinemaDetails';
import RenderAllMovies from '../../components/RenderAllMovies/RenderAllMovies';

const CinemasDetailView = ({ pressedCinema, pressedMovies }) => {

    return (
        <ScrollView>
            <RenderAllCinemaDetails {...pressedCinema} />
            <RenderAllMovies pressedMovies={pressedMovies} />
        </ScrollView>
    )
}

const mapStateToProps = (reduxStoreState, myProps) => {
    const { cinema, movie } = reduxStoreState;
    const { navigation } = myProps;
    const cinemaIdent = navigation.getParam('id', 0);
    const pressedCinema = cinema.find(c => c.id === cinemaIdent)
    const pressedMovies = movie.filter(m => {
            return m.showtimes.some(s => s.cinema.id === cinemaIdent)
        }).map(m => {
            return {
                id: m.id,
                title: m.title,
                genres: m.genres,
                poster: m.poster,
                year: m.year
            };
        });
        // console.log(pressedMovies)
    return {
        pressedCinema,
        pressedMovies
    }

};

export default connect(mapStateToProps)(CinemasDetailView);

