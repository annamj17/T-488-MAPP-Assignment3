import getAllMovies from '../services/MoviesService';
import * as constants from '../constants';

export const getMovies = () => {
    return async dispatch => {
        try {
            const movies = await getAllMovies();
            dispatch(getMoviesSuccess(movies));
        } catch (err) {
            // TODO: Should dispatch an error action
        }
    };
}

const getMoviesSuccess = movies => {
    return {
        type: constants.GET_MOVIES,
        payload: movies
    };
};