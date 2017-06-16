import Axios from 'axios';
import { FETCH_BOOK_BY_ID_SUCCESS } from './actionTypes';

const URL = 'http://592e3a99b6b9fa00114e6eb3.mockapi.io/books';

export const fetchBooksSuccess = books => {
  return {
    type: 'FETCH_BOOKS_SUCCESS',
    books
  };
};

export const fetchBook = () => {
  return dispatch => {
    return Axios.get(URL)
      .then(response => {
        dispatch(fetchBooksSuccess(response.data));
      })
      .catch(err => {
        throw err;
      });
  };
};

export const createBook = book => {
  return dispatch => {
    return Axios.post(URL, book)
      .then(response => {
        dispatch(createBookSuccess(response.data));
      })
      .catch(err => {
        throw err;
      });
  };
};

export const createBookSuccess = book => {
  return {
    type: 'CREATE_BOOK_SUCCESS',
    book
  };
};

export const fetchBookByIdSuccess = book => {
  return {
    type: FETCH_BOOK_BY_ID_SUCCESS,
    book
  };
};

export const fetchBookById = bookId => {
  return dispatch => {
    return Axios.get(URL + '/' + bookId)
      .then(response => {
        dispatch(fetchBookByIdSuccess(response.data));
      })
      .catch(err => {
        throw err;
      });
  };
};
