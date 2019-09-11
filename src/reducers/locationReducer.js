import { SAVE_LOCATION, RESET_LOCATION } from '../constants/actionTypes';
import initialState from './initialState';

export default (state = initialState.location, action) => {
  switch (action.type) {
    case SAVE_LOCATION:
      return {
        city: action.payload.city,
        id: action.payload.id,
        weatherConditions: action.payload.weatherConditions
      };

    case RESET_LOCATION:
      return {};

    default:
      return state;
  }
};
