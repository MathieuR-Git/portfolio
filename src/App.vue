<template>
  <div id="app">
    <Header />
    <BurgerMenu />
    <hr />
    <router-view />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import BurgerMenu from "@/components/Menu/BurgerMenu.vue";
export default {
  name: "App",
  components: {
    Header,
    Footer,
    BurgerMenu,
  },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
html,
body {
  position: relative;
  background-color: rgb(23, 24, 26);
  min-height: 100vh;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*  text-align: center; */
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
hr {
  width: 70%;
  margin: auto;
  margin-bottom: 2vh;
}
</style>
