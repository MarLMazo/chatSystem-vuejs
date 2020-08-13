import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/Login.vue";
import Chat from "../views/Chat.vue";
//import Chat from "../components/CreateMessage.vue";

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login
  },
  {
    path: '/chat',
    name: 'Chat',
    component: Chat,
    props: true,
    //need to protect
    beforeEnter: (to, from, next) => {
      if (to.params.name) {
        next();
      } else {
        next({name: 'Login'})
      }
    }
  }
  // {
  //   path: "/",
  //   name: "Home",
  //   component: Home
  // },
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue")
  // }

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
