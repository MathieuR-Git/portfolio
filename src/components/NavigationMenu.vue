<template>
  <nav>
    <ul v-if="this.$route.path == '/'">
      <li>
        <router-link to="/competences" tag="a">Compétences</router-link>
      </li>
      <li><router-link to="/projects" tag="a">Mes projets</router-link></li>
      <li><router-link to="/contact" tag="a">Me contacter</router-link></li>
      <li>
        <a href="MathieuReversez-CV.pdf" download>Mon CV</a>
      </li>
    </ul>
    <ul v-else-if="this.$route.path == '/competences'">
      <li><router-link to="/" tag="a">Accueil</router-link></li>
      <li><router-link to="/projects" tag="a">Mes projets</router-link></li>
      <li><router-link to="/contact" tag="a">Me contacter</router-link></li>
      <li><a href="MathieuReversez-CV.pdf" download>Mon CV</a></li>
    </ul>
    <ul v-else-if="this.$route.path == '/projects'">
      <li><router-link to="/" tag="a">Accueil</router-link></li>
      <li><router-link to="/competences" tag="a">Compétences</router-link></li>
      <li><router-link to="/contact" tag="a">Me contacter</router-link></li>
      <li><a href="MathieuReversez-CV.pdf" download>Mon CV</a></li>
    </ul>
    <ul v-else>
      <li><router-link to="/" tag="a">Accueil</router-link></li>
      <li><router-link to="/competences" tag="a">Compétences</router-link></li>
      <li><router-link to="/projects" tag="a">Mes projets</router-link></li>
      <li><a href="MathieuReversez-CV.pdf" download>Mon CV</a></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Navigation",
};
</script>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=PT+Serif&display=swap");
// a {
//   color: white;
// }
nav {
  max-width: 100vw;
  position: relative;
}
ul {
  position: relative;
  left: 0px;
  display: flex;
  justify-content: flex-end;
}

li {
  margin: 2.5vw 3.2vw 2.5vw 3.2vw;
  font-family: "PT Serif", serif;
  font-style: none;
  list-style-type: none;
  text-transform: uppercase;

  & a {
    position: relative;
    text-decoration: none;
    color: white;
    text-decoration: none;
    padding-bottom: 3px;
    cursor: pointer;
    transition: color 1000ms, transform 450ms;
    &:hover {
      color: aqua;

      &::before {
        visibility: visible;
        transform: scaleX(1.4);
      }
    }

    &::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 2px;
      bottom: 0;
      left: 10%;
      width: 80%;
      background-color: aqua;
      visibility: hidden;
      transform: scaleX(0);
      transition: all 0.3s ease-in-out 0s;
    }
  }
}

// li > a {
//   position: relative;
//   color: white;
//   text-decoration: none;
//   padding-bottom: 3px;
//   cursor: pointer;
// }

// a:hover {
//   color: white;
// }

// li > a::before {
//   content: "";
//   position: absolute;
//   width: 100%;
//   height: 2px;
//   bottom: 0;
//   left: 0;
//   background-color: white;
//   visibility: hidden;
//   transform: scaleX(0);
//   transition: all 0.3s ease-in-out 0s;
// }

// li > a:hover::before {
//   visibility: visible;
//   transform: scaleX(1);
// }

@media screen and (max-width: 40em) {
  nav {
    display: none;
  }
}
</style>
