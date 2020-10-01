import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from "../components/Login.vue"
import SingUp from "../components/SingUp.vue"
import Recover from "../components/Recover.vue"
import Home from "../components/Home.vue"
import User from "../components/User.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: "/singup",
    name: "SingUp",
    component: SingUp,
  },
  {
    path: "/recover",
    name: "Recover",
    component: Recover,
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/user",
    name: "User",
    component: User,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
