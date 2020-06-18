<template>
  <main>
    <h1>Liste des projets</h1>

    <FilterButtons />

    <div class="container">
      <ProjectItem
        v-for="item in projects"
        :key="item.name"
        :name="item.name"
        :description="item.description"
        :image="item.img"
        :technologies="item.technologies"
        :title="item.title"
        :classes="item.classes"
      />
    </div>
  </main>
</template>

<script>
import ProjectItem from "./ProjectGen.vue";
import FilterButtons from "./FilterButtons.vue";
import json from "./Projects.json";
/* eslint-disable */
export default {
  name: "Projects",
  components: {
    ProjectItem,
    FilterButtons,
  },
  data() {
    return {
      filter: false,
      projects: json,
    };
  },
  methods: {},
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=PT+Serif&display=swap");
/* main {
  min-height: 100vh;
} */

.paginationHide {
  margin: 30px auto;
  transition: all 0.5s linear;
  transition-property: opacity, height, margin;
  display: block;
  position: relative;
}

/* .hiddenContent {
  height: 0px;
  margin: 0 auto;
} */
@keyframes fade-out {
  0% {
    opacity: 1;
    font-size: 1em;
  }
  99.99% {
    opacity: 0;
  }
  100% {
    display: none;
  }
}
@keyframes fade-in {
  0% {
    opacity: 0;
  }
  0.1% {
    display: block;
    opacity: 0.01;
  }
  100% {
    opacity: 1;
  }
}

.showContent {
  animation-name: fade-in;
  animation-duration: 0.4s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
}
.hiddenContent {
  animation-name: fade-out;
  animation-duration: 0.4s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
}
.container {
  max-width: 100vw;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 1em;
}
h1,
h2 {
  text-align: center;
}
h1,
h2,
p {
  color: white;
}
img {
  display: block;
  margin-top: 1em;
  margin-left: auto;
  margin-right: auto;
  width: 90%;
}
/* img{
  width:90%;
  margin-top:1em;
  margin-left:5%;
  margin-right:5%;
} */
.project > p:first-of-type {
  text-align: center;
}
@media screen and (min-width: 40em) {
  .project {
    max-width: 47%;
    margin: 1rem;
    border: 1px solid aqua;
    border-radius: 4px;
    position: relative;
  }
}

h2 {
  height: 3em;
  line-height: 1.2em; /* hauteur de ligne (identique) */
  white-space: nowrap; /* interdiction de passer à la ligne */
  padding-top: 0.4rem;
  padding-bottom: 0.4em;
  border-bottom: 1px solid aqua;
  font-family: "PT Serif", serif;
  background: white;
  color: black;
  pointer-events: none;
}

a {
  pointer-events: visible;
}
#insy2s {
  color: black;
  font-style: oblique;
  text-decoration: none !important;
  font-size: 0.7em;
}

h4 {
  padding: 0.5em;
}
.project > p {
  margin: 1em;
}

ul {
  margin: 1em;
}

li {
  list-style-type: "-";
  padding: 0.4em;
  pointer-events: none;
}

span {
  pointer-events: visible;
}
h4 {
  text-align: center;
  color: white;
}
a {
  color: white;
}
b {
  position: absolute;
  right: 5%;
}

@media screen and (max-width: 40em) {
  .project {
    margin: 1rem;
    border: 1px solid aqua;
    border-radius: 4px;
    position: relative;
  }
  li {
    max-width: 80%;
  }
}

u {
  cursor: help;
}
/* ICONS COLOR*/
.fa-angular {
  color: #dd0031;
}
.fa-css3-alt {
  color: #264ce3;
}
.fa-react {
  color: #27dcfa;
}
.fa-vuejs {
  color: #43b381;
}
.fa-js-square {
  color: #f7df1e;
}
.fa-bootstrap {
  color: #563d7c;
}
.fa-mdb {
  color: #3788db;
}
.fa-html5 {
  color: #e44d26;
}
</style>
