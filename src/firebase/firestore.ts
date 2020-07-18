import "firebase/auth";
import "firebase/firestore";
import { firebaseApp } from "./config";
import { Lesson } from "../draft/constructor/Lesson";
import { store } from "../redux/store";
import { Action } from "../redux/reducer";
import { Reservation } from "../draft/constructor/Reservation";

export const auth = firebaseApp.auth();
const firestore = firebaseApp.firestore();

//  ────────────────────────────────────────────────────────────── PATH ───┐
export enum CollectionPaths {
  lessons = "lessons",
  reservations = "reservations",
}

export const Firestore = {
  lessons: firestore.collection(CollectionPaths.lessons),
  reservations: firestore.collection(CollectionPaths.reservations),
  startAuthentication,
  startServer,
};
// <───────────────────────────────────────────────────────────────────────┘

//  ──────────────────────────────────────────────────────────── SERVER ───┐
function startServer() {
  Firestore.lessons.onSnapshot(qs => {
    let lessons: Lesson[] = [];
    qs.forEach(doc => lessons.push(Lesson.load(doc.data() as Lesson)));
    store.dispatch({
      type: Action.SYNC_LESSONS,
      payload: lessons,
    });
  });

  Firestore.reservations.onSnapshot(qs => {
    let reservations: Reservation[] = [];
    qs.forEach(doc =>
      reservations.push(Reservation.load(doc.data() as Reservation))
    );
    store.dispatch({
      type: Action.SYNC_RESERVATIONS,
      payload: reservations,
    });
  });
}
// <───────────────────────────────────────────────────────────────────────┘

//  ────────────────────────────────────────────────────────────── AUTH ───┐
function startAuthentication() {
  auth.onAuthStateChanged(user => {
    store.dispatch({
      type: Action.UPDATE_USER_STATE,
      payload: user,
    });
  });
}
// <───────────────────────────────────────────────────────────────────────┘
