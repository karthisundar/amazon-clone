import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDJW-LPnQf9TTt_oBjv7YPd5bZm5Mnj7qE",
  authDomain: "fir-d4802.firebaseapp.com",
  projectId: "fir-d4802",
  storageBucket: "fir-d4802.appspot.com",
  messagingSenderId: "11861229106",
  appId: "1:11861229106:web:0dfc35a0cc8d129381c62b",
  measurementId: "G-TBL4G86XV0"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };