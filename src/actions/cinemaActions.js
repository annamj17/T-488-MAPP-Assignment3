import cinemaService from '../services/CinemaService';
import * as constants from '../constants';

export const getCinemas = () => {
    return async dispatch => {
        try {
            const cinemas = await cinemaService.getCinemas();
            dispatch(getcinemasSuccess(cinemas));
        } catch (err) {
            // TODO: Should dispatch an error action
        }
    };
}

const getcinemasSuccess = cinemas => {
    return {
        type: constants.GET_CINEMAS,
        payload: cinemas
    };
};