import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login";
import Blog from "../views/Blog";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "login",
    component: Login
  },
  {
    path: "/blog",
    name: "Blog",
    component: Blog
  }
];

const router = new VueRouter({
  routes
});

export default router;
