import * as React from 'react'
import App from './App'
import firebase from '@react-native-firebase/app'
import Auth from '@react-native-firebase/auth'
import database from '@react-native-firebase/database'

const firebaseConfig = {
  apiKey: "AIzaSyAovdEW-B8bmA1ZMUJ-cylFIDY-fYvKw1Y",
  authDomain: "i-home2.firebaseapp.com",
  databaseURL: "https://i-home2-default-rtdb.firebaseio.com",
  projectId: "i-home2",
  storageBucket: "i-home2.appspot.com",
  messagingSenderId: "328547132507",
  appId: "1:328547132507:web:b08061d31eeb0ad28e4b7e",
  measurementId: "G-GGGB2ZLJ6Y"
};

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export {Auth, database, firebase}

export default function Setup(){
  return(
   <App />
  );
}