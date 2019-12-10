import React from 'react';
import { connect } from 'react-redux';
import { getCinemas } from '../../actions/cinemaActions';
import RenderAllCinemaDetails from '../../components/RenderAllCinemaDetails/RenderAllCinemaDetails';

const CinemasDetailView = ({ pressedCinema }) => {

    return (
        <RenderAllCinemaDetails 
            { ...pressedCinema }/>
    )   
}

const mapStateToProps = (reduxStoreState, myProps) => {
        const { cinema } = reduxStoreState;
        const { navigation } = myProps;
        const cinemaIdent = navigation.getParam('id', 0);
        const pressedCinema = cinema.find(c => c.id === cinemaIdent)
        return {
            pressedCinema
        }

}

export default connect(mapStateToProps, { getCinemas })(CinemasDetailView);
