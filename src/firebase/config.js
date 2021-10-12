

import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';
var firebaseConfig = {
    apiKey: "AIzaSyCNrBmya6FfOYYSaLUj7Fk5Ibrc1fsoMX0",
    authDomain: "instagallery-cda7e.firebaseapp.com",
    projectId: "instagallery-cda7e",
    storageBucket: "instagallery-cda7e.appspot.com",
    messagingSenderId: "313606157282",
    appId: "1:313606157282:web:119173092f39f48e0f3fbb",
    measurementId: "G-30RG15K375"
  };
  // Initialize Firebase
  const fire= firebase.initializeApp(firebaseConfig);

  const projectStorage= firebase.storage();
  const projectFireStorage= firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;
  export {fire,projectStorage,projectFireStorage,timestamp};


