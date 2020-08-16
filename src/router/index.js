import { createRouter, createWebHistory } from "vue-router";
import Login from "../components/Login.vue";
import Register from "../components/Register.vue";
import Chat from "../views/Chat.vue";
//import Chat from "../components/CreateMessage.vue";

const routes = [
  {
    path: "/",
    redirect: "/login"
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/chat',
    name: 'Chat',
    component: Chat,
    props: true,
    //need to protect
    beforeEnter: (to, from, next) => {
      //console.log(to);
      if (from.fullPath == '/login') {
        next();
      } else {
        next({name: 'Login'})
      }
    }
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
