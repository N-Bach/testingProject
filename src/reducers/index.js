// Set up your root reducer here...
import { combineReducers } from 'redux';
import { booksReducer, bookReducer } from './bookReducers';
import { animalReducer, animalPicReducer } from './animalReducers';

export default combineReducers({
  books: booksReducer,
  book: bookReducer,
  animal: animalReducer,
  animalPic: animalPicReducer
});
