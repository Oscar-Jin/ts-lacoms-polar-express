import * as firebase from "firebase/app";

//  ─────────────────────────────────────────────────────────── PROFILE ───┐
const configuration = {
  apiKey: "AIzaSyBlVpu45rAGyIgDUNhWR7P9JjyrSiGwJN0",
  authDomain: "lacoms-production-database.firebaseapp.com",
  databaseURL: "https://lacoms-production-database.firebaseio.com",
  projectId: "lacoms-production-database",
  storageBucket: "lacoms-production-database.appspot.com",
  messagingSenderId: "218924369933",
  appId: "1:218924369933:web:7659e0aeca506a02dced44",
  measurementId: "G-64TY1NJYWG",
};
// <───────────────────────────────────────────────────────────────────────┘

//  ────────────────────────────────────────────────────────────── INIT ───┐
export const firebaseApp = firebase.initializeApp(configuration);
// <───────────────────────────────────────────────────────────────────────┘
