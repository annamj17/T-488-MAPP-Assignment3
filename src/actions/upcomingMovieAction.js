import getAllUpcomingMovies from '../services/UpcomingMoviesService';
import * as constants from '../constants';

export const getUpcomingMovies = () => {
    return async dispatch => {
        try {
            const movies = await getAllUpcomingMovies();
            dispatch(getUpcomingMoviesSuccess(movies));
        } catch (err) {
            // TODO: Should dispatch an error action
        }
    };
}

const getUpcomingMoviesSuccess = movies => {
    return {
        type: constants.GET_UPCOMING_MOVIES,
        payload: movies
    };
};