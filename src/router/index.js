import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "../views/Home.vue";
import Corpus from "@/components/Corpus.vue";
import Competences from "@/components/Competences.vue";
// import About from "@/views/About.vue";
import Contact from "@/components/Contact.vue";
import Projects from "@/components/projects/Projects.vue";

Vue.use(VueRouter);

const routes = [
  // {
  //   path: "/",
  //   name: "Home",
  //   component: Home,
  // },
  {
    path: "/",
    name: "Home",
    component: Corpus,
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  // {
  //   path: "/competences",
  //   name: "Competences",
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "@/components/Competences.vue"),
  // },
  {
    path: "/competences",
    name: "Competences",
    component: Competences,
  },
  // {
  //   path: "/competences/:item",
  //   name: "Competences",
  //   component: Competences,
  // },
  {
    path: "/projects/",
    name: "Projets",
    component: Projects,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
