import getAllUpcomingMovies from '../services/UpcomingMoviesService';
import * as constants from '../constants';

export const getUpcomingMovies = () => {
	return async dispatch => {
		try {
			const movies = await getAllUpcomingMovies();
			let removeUnwantedCharacters = JSON.stringify(movies);
			var cleanString = removeUnwantedCharacters.replace(/release-dateIS/g, 'releaseDateIS');
			cinemaObject = JSON.parse(cleanString);
			dispatch(getUpcomingMoviesSuccess(cinemaObject));
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
