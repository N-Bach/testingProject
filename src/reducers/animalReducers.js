import * as AnimalAction from '../actions/animalActions';

export const animalReducer = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_ANIMAL_SUCCESS':
      return action.animal;
    default:
      return state;
  }
};

export const animalPicReducer = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_ANIMAL_PIC_SUCCESS':
      return action.images;
    default:
      return state;
  }
};
