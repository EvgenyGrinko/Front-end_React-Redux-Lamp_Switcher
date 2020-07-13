import { PUSH_SWITCHER_A, PUSH_SWITCHER_B } from "../constants/action-types";

export function pushSwitcherA(payload) {
  return { type: PUSH_SWITCHER_A, payload };
}

export function pushSwitcherB(payload) {
  return { type: PUSH_SWITCHER_B, payload };
}
