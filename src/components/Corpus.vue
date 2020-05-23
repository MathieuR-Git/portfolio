<template>
  <Competences />
</template>

<script>
import Competences from "./Competences.vue";
export default {
  name: "Corpus",
  components: {
    Competences,
  },
};
</script>

<style lang="css" scoped>
@import url("https://fonts.googleapis.com/css2?family=PT+Serif&display=swap");

h2 {
  margin: 2vh;
}

article {
  font-family: "PT Serif", serif;
  color: white;
  position: relative;
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  min-height: 30vh;
}
img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  max-width: 80%;
  border-radius: 10px;
}

/* p {
width: 60%;
    position: relative;
    background: rgba(255, 255, 255, 0.7);
    z-index: 4;
    border-radius: 70% 30% 70% 30%/20% 80% 30% 70%;
    margin-left: auto;
    margin-right: auto;
    /* margin-top: -200px;
    top: -40px;
    color: black;
    padding: 10px;
    vertical-align: middle;
    display: inline-block;
    line-height: 1.2;
    text-align: left;
} */

p {
  width: 60%;
  position: relative;
  text-align: center !important;
  background: rgba(255, 255, 255, 0.9);
  z-index: 4;
  top: -40px;
  min-height: 120px;
  border-radius: 10px;
  margin-left: auto;
  margin-right: auto;
  color: black;
  padding: 10px;
  vertical-align: middle;
  display: inline-block;
  line-height: 1.8;
  text-align: left;
}

div {
  display: flex;
  flex-direction: column;
}
</style>
