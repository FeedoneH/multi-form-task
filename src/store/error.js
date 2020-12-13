const SET_ERROR = "SET_ERROR";

export const MODULE_NAME = "error";
export const getError = (state) => state[MODULE_NAME].error;

const initialState = {
  error: "",
};

export function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case SET_ERROR:
      return {
        ...state,
        error: payload,
      };

    default:
      return state;
  }
}

export const setError = (payload) => {
    console.log('error redux')
  return { type: SET_ERROR, payload };
};
