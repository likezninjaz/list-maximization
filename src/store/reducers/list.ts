import { Reducer } from "redux";

import { listConstants } from "../constants";

interface IListReducer {
  scrollY: number,
} 

const inititalState = {
  scrollY: 0
};

export const list: Reducer<IListReducer, any> = (state = inititalState, action) => {
  switch (action.type) {
    case listConstants.SET_LIST_SCROLL_Y:
      return {
        ...state,
        scrollY: action.payload
      };
    default:
      return state;
  }
};