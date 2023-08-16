import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyDhp7WwmIMNFZUnedPdAfr21T2YKqmZZuE",
    authDomain: "bike-c1f4c.firebaseapp.com",
    projectId: "bike-c1f4c",
    storageBucket: "bike-c1f4c.appspot.com",
    messagingSenderId: "996289758079",
    appId: "1:996289758079:web:be4f1c48b327d333bb504a"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
