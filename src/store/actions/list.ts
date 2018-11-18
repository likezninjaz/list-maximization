import {
  listConstants,
  SET_LIST_SCROLL,
} from "../constants";

export type setListScrollType = (e: any) => ({ type: SET_LIST_SCROLL, payload: any });

export const setListScroll: setListScrollType = e => ({
  type: listConstants.SET_LIST_SCROLL_Y,
  payload: (e.target.scrollTop / e.target.scrollHeight * 100).toFixed(2)
});