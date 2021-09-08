import {
  ON_REQUEST,
  OFF_REQUEST,
} from "./types";

// ==========================================================================================================

export const onRequest = () => {
  return (dispatch) => {
    dispatch({ type: ON_REQUEST });
  }
}

export const offRequest = () => {
  return (dispatch) => {
    dispatch({ type: OFF_REQUEST });
  }
}

