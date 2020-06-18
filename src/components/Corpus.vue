<template>
  <div>
    <h1>Qui suis-je ?</h1>
    <article>
      <h2>Je m’appelle <i>Mathieu REVERSEZ</i>.</h2>
      <p>
        Je suis un développeur Web Front-End et Back-End enthousiaste et
        curieux, j’ai la chance de faire un métier qui me passionne.
      </p>
      <p>
        Intéressé par tout ce qui touche à mon domaine, j’effectue une veille
        quotidienne concernant les nouvelles technologies web et le design.
      </p>
      <p>
        Venez consulter
        <router-link to="/projects">mon portfolio</router-link> et découvrir
        <router-link to="/competences">mon profil</router-link>.
      </p>
    </article>
  </div>
</template>

<script>
export default {
  name: "Corpus",
};
</script>

<style lang="css" scoped>
@import url("https://fonts.googleapis.com/css2?family=PT+Serif&display=swap");

* {
  font-family: "PT Serif", serif;
}
h1 {
  color: white;
  text-align: center;
  text-decoration: underline;
}
article {
  height: 70vh;
  width: 60%;
  position: relative;
  text-align: center !important;
  background: rgba(255, 255, 255, 0.9);
  z-index: 4;
  top: 2vh;
  min-height: 120px;
  border-radius: 10px;
  margin-top: 2vh;
  margin-bottom: 2vh;
  margin-left: 19vw;
  margin-right: 19vw;
  color: black;

  vertical-align: middle;
  display: inline-block;
  line-height: 1.8;
  text-align: left;
}

h2 {
  font-weight: normal;
  padding-top: 8vh;
  padding-bottom: 2em;
}
p {
  font-size: 1.1em;
  line-height: 3em;
}
</style>
