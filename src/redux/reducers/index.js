import { PUSH_SWITCHER_A, PUSH_SWITCHER_B } from "../constants/action-types";

const initialState = {
  isAon: false,
  isBon: false,
  isLampOn: false,
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case PUSH_SWITCHER_A:
      return {
        ...state,
        isAon: !state.isAon,
        isBon: false,
        isLampOn: !state.isAon || state.isBon,
      };
    case PUSH_SWITCHER_B:
      return {
        ...state,
        isAon: false,
        isBon: !state.isBon,
        isLampOn: state.isAon || !state.isBon,
      };

    default:
      return state;
  }
}

export default rootReducer;
