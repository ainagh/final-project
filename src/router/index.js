import { createRouter, createWebHistory } from "vue-router";
import Auth from "../views/Auth.vue";
import Home from "../views/Home.vue";
import Account from "../views/Account.vue"
import SignIn from "../components/SignIn.vue";
import SignUp from "../components/SignUp.vue";
import Timer from "../views/Timer.vue";
import Music from "../views/Music.vue";

const routes = [
  {
    path: "/auth",
    component: Auth,
    children: [
      { path: "login", component: SignIn },
      { path: "signup", component: SignUp },
    ],
  },
  { path: "/", component: Home },
  { path: "/account", component: Account },
  {
    path: '/timer',
    name: 'timer',
    component: Timer
  },
  {
    path: '/music',
    name: 'music',
    component: Music
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
