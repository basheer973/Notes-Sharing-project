// firebase-config.js

// TODO: Replace the values below with your actual Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyCfrAiDhkRTZ13lhDxdBaBk3w-vo_x7XYs",
  authDomain: "notes-sharing-system-6fa21.firebaseapp.com",
  projectId: "notes-sharing-system-6fa21",
  storageBucket: "notes-sharing-system-6fa21.firebasestorage.app",
  messagingSenderId: "131931265921",
  appId: "1:131931265921:web:156b2152aa790b3a872680",
  measurementId: "G-W0THJ9R4H2"
};

// Initialize Firebase App
firebase.initializeApp(firebaseConfig);

// Initialize Firebase Services
const storage = firebase.storage();
const db = firebase.firestore();

// Export Firebase services for use in other files
window.firebaseStorage = storage;
window.firebaseDB = db;
