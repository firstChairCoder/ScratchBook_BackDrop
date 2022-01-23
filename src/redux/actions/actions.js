/* eslint-disable no-unreachable */
//Action types
export const GET_CATS = "GET_CATS";
// export const GET_MORE_CATS = "GET_MORE_CATS";
export const ADD_TO_FAVORITES = "ADD_TO_FAVORITES";
export const REMOVE_FROM_FAVORITES = "REMOVE_FROM_FAVORITES";

export const getCats = (amount, page) => {
  try {
    return async (dispatch) => {
      const response = await fetch(
        `https://api.thecatapi.com/v1/breeds?limit=${amount}&page=${page}`,
        {
          headers: {
            "x-api-key": "68742e96-887f-4f9f-a489-ba3735d55609",
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

// export const getMoreCats = (amount, page) => {
//   try {
//     return async (dispatch) => {
//       const response = await fetch(
//         `https://api.thecatapi.com/v1/breeds?limit=${amount}&page=${page}`,
//         {
//           headers: {
//             "x-api-key": "68742e96-887f-4f9f-a489-ba3735d55609",
//           },
//         }
//       );
//       const json = await response.json();
//       if (json) {
//         dispatch({
//           type: GET_MORE_CATS,
//           payload: json,
//         });
//       } else {
//         console.log("Unable to fetch data from the API BASE URL!");
//       }
//     };
//   } catch (error) {
//     // Add custom logic to handle errors
//     console.log(error);
//   }
// };

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
