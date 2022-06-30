/* eslint-disable no-unreachable */
import { Alert } from "react-native";

import config from "../../../config";
import type { Cat } from "../../types";

//Action types declaration
export const GET_CATS = "GET_CATS";
export const ADD_TO_FAVORITES = "ADD_TO_FAVORITES";
export const REMOVE_FROM_FAVORITES = "REMOVE_FROM_FAVORITES";

export const getCats = (amount: number) => {
  try {
    return async (dispatch: any) => {
      const response = await fetch(
        `https://api.thecatapi.com/v1/breeds?limit=${amount}&page=0`,
        {
          headers: {
            "x-api-key": `${config.API_KEY}`
          }
        }
      );
      const json = await response.json();
      if (json) {
        dispatch({
          type: GET_CATS,
          payload: json
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

export const addFavorites = (cat: Cat) => (dispatch: any) => {
  dispatch({
    type: ADD_TO_FAVORITES,
    payload: cat
  });
};

export const removeFavorites = (cat: Cat) => (dispatch: any) => {
  dispatch({
    type: REMOVE_FROM_FAVORITES,
    payload: cat
  });
};
