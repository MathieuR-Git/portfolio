<template>
  <div id="app">
    <Header />
    <BurgerMenu />
    <hr />
    <router-view />

    <button class="goTop" :style="{ display: show }" @click="backToTop">
      <i class="fa fa-angle-up" aria-hidden="true"></i>
    </button>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import BurgerMenu from "@/components/BurgerMenu.vue";
export default {
  name: "App",
  components: {
    Header,
    Footer,
    BurgerMenu,
  },
  data: () => ({
    isVisible: false,
    lastScrollPosition: 0,
    show: "none",
  }),

  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  },
  mounted: function() {
    window.addEventListener("scroll", this.onScroll);
  },
  methods: {
    onScroll() {
      const currentScrollPosition =
        window.pageYOffset || document.documentElement.scrollTop;
      if (currentScrollPosition < 0) {
        return;
      }

      if (Math.abs(currentScrollPosition - this.lastScrollPosition) < 60) {
        return;
      }

      this.lastScrollPosition = currentScrollPosition;

      var scrollPos = window.scrollY;
      var winHeight = window.innerHeight;
      var docHeight = document.documentElement.scrollHeight;
      var perc = (100 * scrollPos) / (docHeight - winHeight);

      if (perc >= 20) {
        this.isVisible = true;
        this.show = "block";
      } else {
        this.isVisible = false;
        this.show = "none";
      }
    },
    backToTop() {
      window.scrollTo(0, 0);
    },
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
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  position: relative;
  /*background-color: rgb(23, 24, 26);*/
  /*background-color: #6a89cc;*/
  /*background-color: #c4c6c8;*/
  background-color: #EFF6E0;
  min-height: 100vh;
  scroll-behavior: smooth;
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

/*SCROLLBAR*/
/* width */
::-webkit-scrollbar {
  width: 0.6vw;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: rgba(23, 24, 26, 0.8);
  /* background: #17181a; */
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}

.goTop {
  border-radius: 5px;
  background-color: rgba(1, 14, 27, 0.7);
  position: fixed;
  width: 45px;
  height: 45px;
  display: block;
  right: 15px;
  bottom: 15px;
  border: none;
  z-index: 4;
  cursor: pointer;
}
.goTop .fa {
  color: white;
  font-size: 22px;
}
.goTop:hover {
  opacity: 1;
  background-color: rgba(1, 14, 27, 0.9);
}

@media screen and (max-width: 40em) {
  .fa-angle-up {
    color: rgb(23, 196, 197) !important;
  }
  .goTop {
    border-radius: 5px;
    background-color: rgba(255, 255, 255, 0.7);
    position: fixed;
    width: 45px;
    height: 45px;
    display: block;
    right: 15px;
    bottom: 15px;
    border: none;
    z-index: 4;
    cursor: pointer;
  }
  .goTop .fa {
    color: white;
    font-size: 22px;
  }
  .fa-angle-up:hover {
    color: white;
  }
  .goTop:hover {
    opacity: 1;
  }
}
</style>
