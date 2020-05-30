import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [

  {
    path: "/",
    name: "RecommendedDaily",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../views/RecommendedDaily.vue"),
  },
  {
    path: "/exploredetails/:type",
    name: "ExploreDetails",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../views/ExploreTheDetails.vue"),
  },
  {
    path: "/custom",
    name: "CustomInterface",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../views/CustomInterface.vue"),
  },
  {
    path: "/store",
    name: "Store",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../views/TheStore.vue"),
  },
  {
    path: "/aboutme",
    name: "AboutMe",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../views/AboutMe.vue"),
  },
  {
    path: "/write",
    name: "BeganToWrite",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../views/BeganToWrite.vue"),
  },
  {
    path: "/doodle",
    name: "BeganToDoodle",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../views/BeganToDoodle.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
