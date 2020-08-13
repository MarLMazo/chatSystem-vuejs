  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAHV1bRa1YhuicQEDuIpu4_qhObBzdyYMY",
    authDomain: "chatsystem-vuejs.firebaseapp.com",
    databaseURL: "https://chatsystem-vuejs.firebaseio.com",
    projectId: "chatsystem-vuejs",
    storageBucket: "chatsystem-vuejs.appspot.com",
    messagingSenderId: "257341918732",
    appId: "1:257341918732:web:062592c77b81937d80a829",
    measurementId: "G-TQ058QN48M"
  };
  // Initialize Firebase
  const firebaseApp =  firebase.initializeApp(firebaseConfig);
  firebaseApp.firestore().settings({timestampsInSnapshots: true});
  firebase.analytics();

  export default firebaseApp.firestore();