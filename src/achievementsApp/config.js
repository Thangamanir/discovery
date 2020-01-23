// Import core of Firebase client
import firebase from "firebase/app";

// Import Firebase Authentication (optional)
import "firebase/auth";

// Import Firebase Realtime Database (optional)
import "firebase/database";

// Import Firestore Database
import "firebase/firestore";

// Import Firebase Functions (optional)
import "firebase/functions";

import CodeCombatLevels from "./CodeCombatLevels";

export const APP_SETTING = {
  CodeCombatLevels,
  games: {
    "passenger-picker": {
      id: "passenger-picker",
      name: "Passenger Pick-up"
    },
    squad: {
      id: "squad",
      name: "Squad"
    }
  },
  basename: process.env.REACT_APP_BASENAME || "/",
  defaultThrottle: 500,
  defaultTimeout: 10000,
  GITHUB_BASE_URL: "https://github.com/",
  AWS_SERVER_URL:
    "https://w2gtby1p36.execute-api.us-east-1.amazonaws.com/dev/helloTest",
  JUPYTER_FILE_UPLOAD_LIMIT: 1, //in MB
  ADMIN_ANALYSIS_LIMIT: 500,
  LOG_ANALYSIS_LIMIT: 500,
  USER_ANALYSIS_LIMIT: 500,
  LOG_ANALYSIS_PATH_TYPE: [
    { name: "PATH_OPEN" },
    { name: "PROBLEM_SOLUTION_SUBMIT_SUCCESS" },
    { name: "PROBLEM_SOLUTION_SUBMIT_REQUEST" },
    { name: "PROBLEM_SOLUTION_ATTEMPT_REQUEST" }
  ],
  LOG_ANALYSIS_COURSE_TYPE: [
    { name: "ASSIGNMENT_SOLUTION_SUCCESS" },
    { name: "ASSIGNMENT_SOLUTION_REQUEST" },
    { name: "COURSE_MEMBERS_FETCH_SUCCESS" },
    { name: "COURSE_PATHS_FETCH_SUCCESS" },
    { name: "COURSE_ASSIGNMENTS_OPEN" },
    { name: "COURSE_ASSIGNMENTS_CLOSE" }
  ],
  LOG_ANALYSIS_COMMON_TYPE: [{ name: "CODE_ANALYSIS" }]
};

// Initialize Firebase
const config = {
  apiKey: "AIzaSyAsx24P-EYzZs6Fs45S8BE6HH8FMwsXYHs",
  authDomain: "nus-discovery-dev.firebaseapp.com",
  databaseURL: "https://nus-discovery-dev.firebaseio.com",
  projectId: "nus-discovery-dev",
  storageBucket: "nus-discovery-dev.appspot.com",
  messagingSenderId: "552054912675"
};

firebase.initializeApp(config);

// initialize Firestore
firebase.firestore();

export const firebaseConfig = firebase;
