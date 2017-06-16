import Axios from 'axios';

const FETCH_ANIMAL = 'FETCH_ANIMAL';
const FETCH_ANIMAL_SUCCESS = 'FETCH_ANIMAL_SUCCESS';
const FETCH_ANIMAL_FAILED = 'FETCH_ANIMAL_FAILED';
const URL = 'http://api.myjson.com/bins/1groxf';

const ANIMAL_QUERY = 'http://www.splashbase.co/api/v1/images/search?query=';

export const fetchAnimal = () => {
  return dispatch => {
    return Axios.get(URL)
      .then(response => {
        dispatch(fetchAnimalSuccess(response.data));
      })
      .catch(err => {
        throw err;
      });
  };
};

export const fetchAnimalSuccess = animal => {
  return {
    type: FETCH_ANIMAL_SUCCESS,
    animal
  };
};

export const fetchAnimalFail = err => {
  return {
    type: FETCH_ANIMAL_FAILED,
    err
  };
};

export const fetchAnimalPic = tag => {
  return dispatch => {
    return Axios.get(ANIMAL_QUERY + tag)
      .then(response => {
        dispatch(fetchAnimalPicSuccess(response.data.images));
        console.log('respone', response);
      })
      .catch(err => {
        throw err;
      });
  };
};

export const fetchAnimalPicSuccess = images => {
  return {
    type: 'FETCH_ANIMAL_PIC_SUCCESS',
    images
  };
};
