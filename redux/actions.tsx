export const GET_BOOKS = "GET_BOOKS"
export const ADD_TO_BOOKMARK_LIST = "ADD_TO_BOOKMARK_LIST"
export const REMOVE_FROM_BOOKMARK_LIST = "REMOVE_FROM_BOOKMARK_LIST"

import axios from "axios"

import { BASE_URL } from "../config"

export const getBooks = () => {
    try {
        return async (dispatch: (arg0: { type: string; payload: any }) => void) => {
            const response = await axios.get(`${BASE_URL}`)
            if (response.data) {
                dispatch({
                    type: GET_BOOKS,
                    payload: response.data
                });
            } else {
                console.log("Unable to fetch data from the API BASE URL!")
            }
        }
    } catch (error) {
        console.log(error)
    }
}

export const addBookmark = (book: any) => (dispatch: (arg0: { type: string; payload: any }) => void) => {
    dispatch({
        type: ADD_TO_BOOKMARK_LIST,
        payload: book
    })
}

export const removeBookmark = (book: any) => (dispatch: (arg0: { type: string; payload: any }) => void) => {
    dispatch({
        type: REMOVE_FROM_BOOKMARK_LIST,
        payload: book
    })
}