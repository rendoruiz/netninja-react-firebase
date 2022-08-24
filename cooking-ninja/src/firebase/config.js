import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAyM4A1yEsIZTtJvqxRphn_bOadc8G4b2g",
  authDomain: "udemy-netninja-cookingsite.firebaseapp.com",
  projectId: "udemy-netninja-cookingsite",
  storageBucket: "udemy-netninja-cookingsite.appspot.com",
  messagingSenderId: "460651226449",
  appId: "1:460651226449:web:c7d1c22ee7fe5fc1905f70"
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();

export { projectFirestore };