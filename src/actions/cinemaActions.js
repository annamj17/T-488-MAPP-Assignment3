import cinemaService from '../services/CinemaService';
import * as constants from '../constants';

export const getCinemas = () => {
    return async dispatch => {
        try {
            const cinemas = await cinemaService.getCinemas();
            console.log("Inside Action", cinemas);
            dispatch(getcinemasSuccess(cinemas));
        } catch (err) {
            // TODO: Should dispatch an error action
        }
    };
}

const getcinemasSuccess = cinemas => {
    console.log("Inside action creator:", cinemas);
    return {
        type: constants.GET_CINEMAS,
        payload: cinemas
    };
};