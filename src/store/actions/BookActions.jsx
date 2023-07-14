import axios from "axios"
import { ActionTypes } from "../constants"

const GetBooksAction = () => {
  return async (dispatch) => {
    dispatch({
      type: ActionTypes.BOOKS_LOADER,
    })

    try {
      const books = await axios.get(`${process.env.REACT_APP_API_BASE_URL}`, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "x-api-key": `${process.env.REACT_APP_API_KEY}`,
        },
      })
      dispatch({
        type: ActionTypes.GET_BOOKS_SUCCESS,
        payload: books.data.data,
      })
    } catch (err) {
      dispatch({
        type: ActionTypes.GET_BOOKS_FAIL,
      })
      console.log("err", err)
    }
  }
}

const SearchBooksAction = (searchTerm) => {
  return async (dispatch) => {
    dispatch({
      type: ActionTypes.BOOKS_LOADER,
    })

    try {
      const books = await axios.get("https://books-list-api.vercel.app/books", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "x-api-key": "#b0@6hX8YasCq6^unOaPw1tqR",
        },
      })
      const formattedSearchTerm = searchTerm.trim().toLowerCase()
      const filterBooks = books.data.data.filter((book) => {
        return book.title.toLowerCase().includes(formattedSearchTerm)
      })
      dispatch({
        type: ActionTypes.SEARCH_BOOK,
        payload: filterBooks,
      })
    } catch (err) {
      dispatch({
        type: ActionTypes.GET_BOOKS_FAIL,
      })
      console.log("err", err)
    }
  }
}

export { GetBooksAction, SearchBooksAction }
