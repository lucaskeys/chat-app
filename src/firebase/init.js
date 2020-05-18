import firebase from 'firebase'  
import firestore from 'firebase/firestore'
  
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCsy5vT1FGN7ApVz04xqSyHvzUkb3VqolM",
    authDomain: "chat-app-60fee.firebaseapp.com",
    databaseURL: "https://chat-app-60fee.firebaseio.com",
    projectId: "chat-app-60fee",
    storageBucket: "chat-app-60fee.appspot.com",
    messagingSenderId: "832295299719",
    appId: "1:832295299719:web:a6a193f78f7fcdc21ea622"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  export default firebaseApp.firestore()