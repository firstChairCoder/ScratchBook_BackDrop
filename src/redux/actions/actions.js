/* eslint-disable no-unreachable */
import config from "../../../config";

//Action types declaration
export const GET_CATS = "GET_CATS";
export const ADD_TO_FAVORITES = "ADD_TO_FAVORITES";
export const REMOVE_FROM_FAVORITES = "REMOVE_FROM_FAVORITES";

export const getCats = (amount) => {
  try {
    return async (dispatch) => {
      const response = await fetch(
        `${config.API_URL}?limit=${amount}`,
        {
          headers: {
            "x-api-key": `${config.API_KEY}`,
          },
        }
      );
      const json = await response.json();
      if (json) {
        dispatch({
          type: GET_CATS,
          payload: json,
        });
      } else {
        console.log("Unable to fetch data from the API BASE URL!");
      }
    };
  } catch (error) {
    // Add custom logic to handle errors
    console.log(error);
  }
};

export const addFavorites = (cat) => (dispatch) => {
  dispatch({
    type: ADD_TO_FAVORITES,
    payload: cat,
  });
};

export const removeFavorites = (cat) => (dispatch) => {
  dispatch({
    type: REMOVE_FROM_FAVORITES,
    payload: cat,
  });
};
