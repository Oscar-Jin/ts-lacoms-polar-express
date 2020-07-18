//  ──────────────────────────────────────────────────────────── ACTION ───┐
export enum Action {
  SYNC_LESSONS = "SYNC_LESSONS",
  SYNC_RESERVATIONS = "SYNC_RESERVATIONS",
  UPDATE_USER_STATE = "UPDATE_USER_STATE",
}

export type ActionArgs = {
  type: Action;
  payload: any;
};
// <───────────────────────────────────────────────────────────────────────┘

//  ─────────────────────────────────────────────────────────── REDUCER ───┐
export const lessons = (state = [], action: ActionArgs) => {
  console.log(action);
  switch (action.type) {
    case Action.SYNC_LESSONS:
      return [...action.payload];
    default:
      return state;
  }
};

export const reservations = (state = [], action: ActionArgs) => {
  switch (action.type) {
    case Action.SYNC_RESERVATIONS:
      return [...action.payload];
    default:
      return state;
  }
};
// <───────────────────────────────────────────────────────────────────────┘

//  ────────────────────────────────────────────────────────────── USER ───┐
export const user = (state = {}, action: ActionArgs) => {
  switch (action.type) {
    case Action.UPDATE_USER_STATE:
      return action.payload;
    default:
      return state;
  }
};
// <───────────────────────────────────────────────────────────────────────┘
