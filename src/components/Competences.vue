<template>
  <div>
    <h1>Mes compétences</h1>
    <article id="competences">
      <section>
        <h1>Front-End</h1>
        <div id="frontend">
          <Progress
            :radius="50"
            v-for="competence in competencesfront"
            :key="competence.title"
            :value="competence.value"
            :strokeColor="competence.color"
          >
            <template v-slot:default>
              <!-- <router-link to="/contact" tag="b" :title="competence.title"> -->
              <b :title="competence.title">
                <i
                  :class="competence.class"
                  v-bind:style="{ color: competence.color }"
                >
                </i>
                <br />
                {{ competence.title }}
              </b>
              <!-- </router-link> -->
            </template>
          </Progress>
        </div>
      </section>
      <hr />
      <section>
        <h1>Back-End</h1>
        <div id="backend">
          <Progress
            :radius="50"
            v-for="competence in competencesback"
            :key="competence.title"
            :value="competence.value"
            :strokeColor="competence.color"
          >
            <template v-slot:default>
              <b :title="competence.title">
                <i
                  :class="competence.class"
                  v-bind:style="{ color: competence.color }"
                >
                </i>
                <br />
                {{ competence.title }}
              </b>
            </template>
          </Progress>
        </div>
      </section>
      <hr />
      <section>
        <h1>Autres</h1>
        <div id="other">
          <Progress
            :radius="50"
            v-for="competence in autres"
            :key="competence.title"
            :value="competence.value"
            :strokeColor="competence.color"
          >
            <template v-slot:default>
              <b :title="competence.title">
                <i
                  :class="competence.class"
                  v-bind:style="{ color: competence.color }"
                >
                </i>
                <br />
                {{ competence.title }}
              </b>
            </template>
          </Progress>
        </div>
      </section>
    </article>
    <article>
      <h1>Mes certifications</h1>
      <section>En cours</section>
    </article>
  </div>
</template>

<script>
import Progress from "easy-circular-progress";
export default {
  name: "Competences",
  components: {
    Progress,
  },
  data: () => ({
    competencesfront: [
      {
        title: "React",
        value: 80,
        color: "#27DCFA",
        class: "fab fa-react fa-2x",
      },
      {
        title: "VueJS",
        value: 70,
        color: "#43B381",
        class: "fab fa-vuejs fa-2x",
      },
      {
        title: "Angular",
        value: 45,
        color: "#DD0031",
        class: "fab fa-angular fa-2x",
      },
      {
        title: "JavaScript",
        value: 75,
        color: "#F7DF1E",
        class: "fab fa-js-square fa-2x",
      },
      {
        title: "PHP",
        value: 40,
        color: "#777BB3",
        class: "fab fa-php fa-2x",
      },
      {
        title: "HTML",
        value: 75,
        color: "#E44D26",
        class: "fab fa-html5 fa-2x",
      },
      {
        title: "CSS",
        value: 66,
        color: "#264CE3",
        class: "fab fa-css3-alt fa-2x",
      },
      {
        title: "Bootstrap",
        value: 70,
        color: "#563D7C",
        class: "fab fa-bootstrap fa-2x",
      },
      {
        title: "MDBootstrap",
        value: 70,
        color: "#3788DB",
        class: "fab fa-mdb fa-2x",
      },
    ],
    competencesback: [
      {
        title: "Node.js",
        value: 66,
        color: "#689F63",
        class: "fab fa-node fa-2x",
      },
      {
        title: "PHP",
        value: 20,
        color: "#777BB3",
        class: "fab fa-php fa-2x",
      },
    ],
    autres: [
      {
        title: "Intégration continue (GitHub, GitLab)",
        value: 80,
        color: "black",
        class: "fab fa-git-alt fa-2x",
      },
      {
        title: "Base de données (SQL, NoSQL)",
        value: 80,
        color: "#C74634",
        class: "fas fa-database fa-2x",
      },
      {
        title: "Authentification (Firebase)",
        value: 70,
        color: "#41A4F7",
        class: "fas fa-key fa-2x",
      },
      {
        title: "Hébergement (Heroku, Netlify)",
        value: 70,
        color: "#1A537E",
        class: "fas fa-server fa-2x",
      },
      {
        title: "Méthode AGILE",
        value: 75,
        color: "#1FB0E6",
        class: "fas fa-tasks fa-2x",
      },
    ],
  }),
};
</script>

<style lang="css" scoped>
@import url("https://fonts.googleapis.com/css2?family=PT+Serif&display=swap");
#competences {
  margin-left: 2vw;
  margin-right: 2vw;
  background: rgba(62, 66, 58, 0.7);
  border: 1px solid black;
  border-radius: 5px;
  /*background: #3e423a;*/
  min-height: 100vh;
  padding: 2vh;
  padding-bottom: 4vh;
}
h1 {
  position: relative;
  font-family: "PT Serif", serif;
  /* color: white; */
  color: black;
  font-size: 1.4rem;
  text-align: center;
  margin: 4vh auto;
  pointer-events: none;

  text-decoration: underline;
  text-underline-position: under;
}

#frontend {
  padding: 2vh;
  font-family: "PT Serif", serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  width: 80vw;
  margin: 0 auto;
  color: #fff;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: stretch;
  justify-content: center;
  align-items: center;
  border-left: inset 4px #00ffff;
  border-top: inset 4px #00ffff;
  border-right: solid 1px #00ffff;
  border-bottom: solid 1px #00ffff;
  border-radius: 10px;
}

#frontend > .vue-circular-progress {
  flex: 33.33%;
}
#backend {
  padding: 2vh;
  font-family: "PT Serif", serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  width: 80vw;
  margin: 0 auto;
  color: #fff;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: stretch;
  justify-content: center;
  align-items: center;
  border-left: inset 4px #00ffff;
  border-top: inset 4px #00ffff;
  border-right: solid 1px #00ffff;
  border-bottom: solid 1px #00ffff;
  border-radius: 10px;
}
#other > .vue-circular-progress {
  flex: 33.33%;
}
#other {
  padding: 2vh;
  font-family: "PT Serif", serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  width: 80vw;
  margin: auto;
  color: #fff;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: stretch;
  justify-content: center;
  align-items: center;
  border-left: inset 4px #00ffff;
  border-top: inset 4px #00ffff;
  border-right: solid 1px #00ffff;
  border-bottom: solid 1px #00ffff;
  border-radius: 10px;
  overflow-wrap: anywhere;
}

#backend > .vue-circular-progress {
  flex: 33.33%;
}
hr {
  margin-top: 4vh;
  /*background-color: black; */
  /* color: black; */
  border: solid 2px #00ffff;
  /* border: solid 2px rgb(203, 207, 207); */
  height: 1px;
  -webkit-transform: skew(30deg);
  -moz-transform: skew(30deg);
  -o-transform: skew(30deg);
  tranform: skew(30deg);
  /* border-radius: 20% 80% 30% 70%/70% 30% 70% 30%; */
}

i,
b {
  cursor: pointer;
}
</style>
