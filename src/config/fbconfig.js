import firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/auth';

var config = {
    apiKey: "AIzaSyAIVKehNKSY4gOQhOck-Pvqep3_d0h4734",
    authDomain: "blogreact-cca02.firebaseapp.com",
    databaseURL: "https://blogreact-cca02.firebaseio.com",
    projectId: "blogreact-cca02",
    storageBucket: "",
    messagingSenderId: "18999478076"
  };
  firebase.initializeApp(config);
  firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;