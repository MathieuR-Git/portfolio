<template>
  <header>
    <!---<router-link to="/">Mathieu <strong>REVERSEZ</strong></router-link>-->
    <h1>
      <a href="/">Mathieu <strong>REVERSEZ</strong></a>
    </h1>
    <h2>
      Développeur Web <code>{{ front }}</code>
    </h2>

    <nav>
      <ul>
        <li><a href="/competences">Compétences</a></li>
        <li><a href="/projects">Mes projets</a></li>
        <li><a href="/contact">Me contacter</a></li>
        <li><a href="MathieuReversez-CV.pdf" download>Mon CV</a></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
  data: () => ({
    front: "< Front-End & Back-End />",
  }),
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@1,500&display=swap&family=Dancing+Script:wght@600&display=swap");
@import url("https://fonts.googleapis.com/css2?family=PT+Serif&display=swap");

header {
  margin: 1vw;
  color: white;
  font-family: "PT Serif", serif;
  align-items: center;
  justify-content: center;
  align-items: flex-start;
  align-self: center;
}
h1 {
  width: 50%;
  text-align: center;
}
h2 {
  text-align: center;
  pointer-events: none;
}

a {
  color: white;
  text-decoration: none;
}
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
}

li > a {
  position: relative;
  color: white;
  text-decoration: none;
  padding-bottom: 3px;
  cursor: pointer;
}

a:hover {
  color: white;
}

li > a::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: white;
  visibility: hidden;
  transform: scaleX(0);
  transition: all 0.3s ease-in-out 0s;
}

li > a:hover::before {
  visibility: visible;
  transform: scaleX(1);
}

code {
  margin-left: 4%;
}

@media screen and (max-width: 40em) {
  header {
    margin: 1vh;
    /* font-family: "Playfair Display", serif; */
    font-family: "PT Serif", serif;
    align-items: center;
    justify-content: center;
    align-items: flex-start;
    align-self: center;
  }

  h1 {
    white-space: nowrap;
    font-size: 1.2em;
    text-justify: auto;
    text-align: center;
  }
  h2 {
    font-size: 1em;
    text-align: end;
  }
  nav {
    display: none;
  }
}
</style>
