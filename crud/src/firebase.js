import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
const firebaseConfig = {
    apiKey: "AIzaSyCBxIz9N5lwPkEe42swguIFNp1maehrUmI",
    authDomain: "fcrud-d6fc2.firebaseapp.com",
    projectId: "fcrud-d6fc2",
    storageBucket: "fcrud-d6fc2.appspot.com",
    messagingSenderId: "823093996299",
    appId: "1:823093996299:web:a4f2b84056a385f440900e"
  };
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore()
  const auth =  firebase.auth()
export {db,auth}