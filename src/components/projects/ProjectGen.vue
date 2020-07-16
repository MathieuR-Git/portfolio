<template>

<div class="paginationHide project" :class="classes">
        <h2 v-html="name"/>
        <img :src="image.src" :alt="image.alt"/>
        <p v-html="description"/>
        <p>Fait avec : 
          <ul >
            <li v-for="(techno, index) in technologies" :key="index">
                <i :class="techno.class1"></i> {{techno.techno1}} - 
                <i :class="techno.class2"></i> {{techno.techno2}} - 
                <i :class="techno.class3"></i> {{techno.techno3}}
                <b v-if="techno.link">Status : <router-link :to="techno.link" tag="a" class="link">{{techno.status}}</router-link></b>
                <b v-else>Status : <a>{{techno.status}}</a></b>
            </li>
          </ul>
        </p>
      </div>

</template>

<script>
export default {
  name: "ProjectItem",
  props: ["name", "image", "description", "technologies", "title", "classes"],
  mounted(){
  }
};
</script>

<style scoped lang="scss">
/*
@media only screen and (max-width: 69em) and (min-width: 40em)  {...}
*/


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
  margin-top:1em;
  margin-left: auto;
  margin-right: auto;
  width: 90%;
}

.project>p:first-of-type{
  text-align: center;

}
@media screen and (min-width: 40em) {
  .project {
   max-width:47%; 
    margin: 1rem;
    border: 1px solid aqua !important;
    border-radius: 4px;
    position:relative;
  }
}

h2 {
  height: 3em;  
  line-height: 1.2em; /* hauteur de ligne (identique) */
  white-space: nowrap; /* interdiction de passer à la ligne */
  padding-top: 1.3rem;
  padding-bottom: 0.4em;
  border-bottom: 1px solid aqua;
  font-family: "PT Serif", serif;
  background: aqua;
  color: black;
  pointer-events: none;
}
a{
  pointer-events: visible;
}
h2 .insy2s{
  color:black;
  font-style:oblique;
  text-decoration: none !important;
  font-size: 0.7em;
  pointer-events: fill;
}

h4{padding:0.5em;}
.project > p {
  margin: 1em;
}

ul{
  margin:1em
}

li{
list-style-type: '-';
  padding:0.4em;
  pointer-events: none;
}

span{
  pointer-events: visible;
}
h4{
  text-align: center;
  color:white;

}
a{
  color:white;
}
b{
  position:absolute;
  right:5%;
}
@media screen and (max-width: 40em) {
  .project {
    margin: 1rem;
    border: 1px solid aqua;
    border-radius: 4px;
    position:relative;
  }
  li{
    max-width: 80%;
  }

  h2 {
  height: 3em;  
  line-height: 1.2em; /* hauteur de ligne (identique) */
  white-space: nowrap; /* interdiction de passer à la ligne */
  padding-top: 0.4rem;
  padding-bottom: 0.4em;
  border-bottom: 1px solid aqua;
  font-family: "PT Serif", serif;
  background: aqua;
  color: black;
  pointer-events: none;
  }
}

u{
  cursor:help
}
/* ICONS COLOR*/
.fa-angular{
  color:#DD0031
}
.fa-css3-alt{
  color:#264CE3
}
.fa-react{
  color:#27DCFA
}
.fa-vuejs{
  color:#43B381
}
.fa-js-square{
  color:#F7DF1E
}
.fa-bootstrap{
  color:#563D7C
}
.fa-mdb{
  color:#3788DB
}
.fa-html5{
  color:#E44D26
}
</style>
