import firebase from 'firebase';
//import firestore from 'firebase/firestore';

var config = {
  apiKey: "AIzaSyAHV1bRa1YhuicQEDuIpu4_qhObBzdyYMY",
  authDomain: "chatsystem-vuejs.firebaseapp.com",
  databaseURL: "https://chatsystem-vuejs.firebaseio.com",
  projectId: "chatsystem-vuejs",
  storageBucket: "chatsystem-vuejs.appspot.com",
  messagingSenderId: "257341918732"
  };
  const firebaseApp = firebase.initializeApp(config);
  firebaseApp.firestore().settings({ timestampsInSnapshots: true});

  export default firebaseApp.firestore();