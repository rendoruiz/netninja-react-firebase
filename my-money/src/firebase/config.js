import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBEJegvLBrEAmu19MDlrYCZXbSNmdH6-rE",
  authDomain: "udemy-netninja-financetracker.firebaseapp.com",
  projectId: "udemy-netninja-financetracker",
  storageBucket: "udemy-netninja-financetracker.appspot.com",
  messagingSenderId: "852228709496",
  appId: "1:852228709496:web:f9b450e74112102526a18d"
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init service
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

export { projectFirestore, projectAuth }