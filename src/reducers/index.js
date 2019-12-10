import { combineReducers } from 'redux';
import cinema from './cinemasReducer';
import movie from './moviesReducer'

export default combineReducers({
    /* This is the Redux store state structur */
    cinema,
    movie
});