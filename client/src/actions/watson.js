// Import types
import {
  INPUT_SUCCESS,
  INPUT_FAIL,
  
} from "./types";

//  Import axios
import axios from "axios";

//  Function that handles  users message
export const userMessage = (message) => async (dispatch) => {
  try {
    dispatch({ type: INPUT_SUCCESS, payload: message });
  } catch (err) {
    dispatch({ type: INPUT_FAIL });
  }
};

