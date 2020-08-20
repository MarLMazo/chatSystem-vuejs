import { createApp } from "vue";
import VueChatScroll from 'vue-chat-scroll';
import App from "./App.vue";
import router from "./router";
import store from "./store";
import firebase from "firebase";
import firebaseApp from "../src/firebase/init";

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

firebaseApp;

firebase.auth().onAuthStateChanged(user => {
  store.dispatch("fetchUser", user);
});

createApp(App)
  .use(store)
  .use(router)
  .use(VueChatScroll)

  .mount("#app");
