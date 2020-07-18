import { createStore, combineReducers } from "redux";
import { lessons, reservations, user } from "./reducer";
import { Lesson } from "../draft/constructor/Lesson";
import { Reservation } from "../draft/constructor/Reservation";

//  ───────────────────────────────────────────────────────── INTERFACE ───┐
export interface RootState {
  lessons: Lesson[];
  reservations: Reservation[];
  user: firebase.User;
}
// <───────────────────────────────────────────────────────────────────────┘

//  ───────────────────────────────────────────────────────────── STORE ───┐
export const store = createStore(
  combineReducers({
    lessons,
    reservations,
    user,
  })
);
// <───────────────────────────────────────────────────────────────────────┘
