const INCREASE_STEP = "INCREASE_STEP";
const DECREASE_STEP = "DECREASE_STEP";
const RESET_STEP = "RESET_STEP";
export const MODULE_NAME = "step";
export const getSteps = (state) => state[MODULE_NAME].step;
const initalState = {
  step: 1,
};

export function reducer(state = initalState, { type, payload }) {
  switch (type) {
    case INCREASE_STEP:
      return {
        ...state,
        step: state.step + 1,
      };
    case DECREASE_STEP:
      return {
        ...state,
        step: state.step - 1,
      };
    case RESET_STEP:
      return {
        ...state,
        step: 1,
      };
    default:
      return state;
  }
}

export const increaseStep = () => ({
  type: INCREASE_STEP,
});
export const decreaseStep = () => ({
  type: DECREASE_STEP,
});
export const resetStep = () => ({
  type: RESET_STEP,
});

// export const increase = (step) => (dispatch) => {
//   if (step < 3) {
//     increaseStep();
//   } else console.log("finish");
// };
