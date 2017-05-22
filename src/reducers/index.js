/*
### Reducers
* In reducers/index.js
* Create reducers functions for all state
* Parameters - state, action
* Remember default value
* Import combineReducers from redux
* Combine reducers and export

### Create Reducers
* myMovieList
    * Look for the action “MY_MOVIE_LIST_LOADED”
    * return the value
* searchResults
    * Look for the action “SEARCH_RESULTS_LOADED”
    * return the value

    */

import {combineReducers} from "redux";
import {
  LOAD_MY_MOVIE_LIST,
  MY_MOVIE_LIST_LOADED,
  MY_MOVIE_LIST_ERROR,
  LOAD_SEARCH_TERM,
  SEARCH_RESULTS_LOADED,
  UPDATE_SEARCH_TERM,
  SAVE_MY_MOVIE,
  REMOVE_MY_MOVIE
 } from "../actions";

function searchResults(state = [], action) {
  switch (action.type) {

    case SEARCH_RESULTS_LOADED:
      console.log("found them", action);
      return action.value;
  }
  return state;
}

function myMovieList(state = [], action) {
  switch (action.type) {
    case MY_MOVIE_LIST_LOADED:
      console.log("found movies", action);
      return action.value;
  }
  return state;
}

const rootReducer = combineReducers({
  searchResults,
  myMovieList
});

export default rootReducer;
