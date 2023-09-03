import axios from 'axios';
import {
  SEARCH_WORD,
  CLEAR_HISTORY,
  FETCH_WORD_DETAILS_REQUEST,
  FETCH_WORD_DETAILS_SUCCESS,
  FETCH_WORD_DETAILS_FAILURE,
} from './actionTypes';

export const searchWord = (word) => ({
  type: SEARCH_WORD,
  payload: word,
});

export const clearHistory = () => ({
  type: CLEAR_HISTORY,
});

export const fetchWordDetailsRequest = () => ({
  type: FETCH_WORD_DETAILS_REQUEST,
});

export const fetchWordDetailsSuccess = (data) => ({
  type: FETCH_WORD_DETAILS_SUCCESS,
  payload: data,
});

export const fetchWordDetailsFailure = (error) => ({
  type: FETCH_WORD_DETAILS_FAILURE,
  payload: error,
});

export const fetchWordDetails = (word) => {
  return async (dispatch) => {
    dispatch(fetchWordDetailsRequest());
    try {
      const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
      dispatch(fetchWordDetailsSuccess(response.data));
    } catch (error) {
      dispatch(fetchWordDetailsFailure(error));
    }
  };
};
