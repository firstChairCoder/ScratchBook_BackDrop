/* eslint-disable no-unreachable */
import config from "../../../config";
import { Alert } from "react-native";

//Action types declaration
export const GET_CATS = "GET_CATS";
export const ADD_TO_FAVORITES = "ADD_TO_FAVORITES";
export const REMOVE_FROM_FAVORITES = "REMOVE_FROM_FAVORITES";

export const getCats = (amount) => {
  try {
    return async (dispatch) => {
      const response = await fetch(
        `https://api.thecatapi.com/v1/breeds?limit=${amount}&page=0`,
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
        Alert.alert("Unable to fetch data from the API BASE URL!");
      }
    };
  } catch (error) {
    // Add custom logic to handle errors
    // console.error(error);
    Alert.alert(error);
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
