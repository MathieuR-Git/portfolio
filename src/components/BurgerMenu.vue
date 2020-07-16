<template>
  <div>
     <img src="profile.jpg" alt="Ma photo" /> 
    <div>
      <nav v-if="this.$route.path == '/'">
        <div class="nav-icon" ref="navIcon" @click="letsgo">
          <div></div>
        </div>
        <transition name="slide-fade" key="whoiam">
          <div class="sub-menu" v-if="show">
            <router-link to="/competences" class="one">
              <i class="fas fa-info-circle fa-2x"></i>
              <span>Compétences</span>
            </router-link>
          </div>
        </transition>
        <transition name="slide-fade" key="projects">
          <div class="sub-menu" v-if="show">
            <router-link to="/projects" class="two">
              <i class="fa fa-code fa-2x"></i>
              <span>Mes projets</span>
            </router-link>
          </div>
        </transition>
        <transition name="slide-fade" key="home">
          <div class="sub-menu" v-if="show">
            <router-link to="/contact" class="three">
              <i class="fa fa-home  fa-2x"></i>
              <span>Me contacter</span>
            </router-link>
          </div>
        </transition>

        <transition name="slide-fade" key="cv">
          <div class="sub-menu" v-if="show">
            <a href="MathieuReversez-CV.pdf" class="four" download>
              <i class="fa fa-file  fa-2x"></i>
              <span>Mon CV</span>
            </a>
          </div>
        </transition>
      </nav>
      <nav v-else-if="this.$route.path == '/competences'">
        <div class="nav-icon" ref="navIcon" @click="letsgo">
          <div></div>
        </div>
        <transition name="slide-fade" key="home">
          <div class="sub-menu" v-if="show">
            <router-link to="/" class="one">
              <i class="fa fa-home  fa-2x"></i>
              <span>Qui suis-je ?</span>
            </router-link>
          </div>
        </transition>
        <transition name="slide-fade" key="projects">
          <div class="sub-menu" v-if="show">
            <router-link to="/projects" class="two">
              <i class="fa fa-code fa-2x"></i>
              <span>Mes projets</span>
            </router-link>
          </div>
        </transition>
        <transition name="slide-fade" key="home">
          <div class="sub-menu" v-if="show">
            <router-link to="/contact" class="three">
              <i class="fa fa-home  fa-2x"></i>
              <span>Me contacter</span>
            </router-link>
          </div>
        </transition>

        <transition name="slide-fade" key="cv">
          <div class="sub-menu" v-if="show">
            <a href="MathieuReversez-CV.pdf" class="four" download>
              <i class="fa fa-file  fa-2x"></i>
              <span>Mon CV</span>
            </a>
          </div>
        </transition>
      </nav>
      <nav v-else-if="this.$route.path == '/projects'">
        <div class="nav-icon" ref="navIcon" @click="letsgo">
          <div></div>
        </div>
        <transition name="slide-fade" key="home">
          <div class="sub-menu" v-if="show">
            <router-link to="/" class="one">
              <i class="fa fa-home  fa-2x"></i>
              <span>Qui suis-je ?</span>
            </router-link>
          </div>
        </transition>
        <transition name="slide-fade" key="whoiam">
          <div class="sub-menu" v-if="show">
            <router-link to="/competences" class="two">
              <i class="fas fa-info-circle fa-2x"></i>
              <span>Compétences</span>
            </router-link>
          </div>
        </transition>

        <transition name="slide-fade" key="contact">
          <div class="sub-menu" v-if="show">
            <router-link to="/contact" class="three">
              <i class="fa fa-home  fa-2x"></i>
              <span>Me contacter</span>
            </router-link>
          </div>
        </transition>

        <transition name="slide-fade" key="cv">
          <div class="sub-menu" v-if="show">
            <a href="MathieuReversez-CV.pdf" class="four" download>
              <i class="fa fa-file  fa-2x"></i>
              <span>Mon CV</span>
            </a>
          </div>
        </transition>
      </nav>
      <nav v-else>
        <div class="nav-icon" ref="navIcon" @click="letsgo">
          <div></div>
        </div>
        <transition name="slide-fade" key="home">
          <div class="sub-menu" v-if="show">
            <router-link to="/" class="one">
              <i class="fa fa-home  fa-2x"></i>
              <span>Qui suis-je ?</span>
            </router-link>
          </div>
        </transition>
        <transition name="slide-fade" key="whoiam">
          <div class="sub-menu" v-if="show">
            <router-link to="/competences" class="two">
              <i class="fas fa-info-circle fa-2x"></i>
              <span>Compétences</span>
            </router-link>
          </div>
        </transition>
        <transition name="slide-fade" key="projects">
          <div class="sub-menu" v-if="show">
            <router-link to="/projects" class="three">
              <i class="fa fa-code fa-2x"></i>
              <span>Mes projets</span>
            </router-link>
          </div>
        </transition>

        <transition name="slide-fade" key="cv">
          <div class="sub-menu" v-if="show">
            <a href="MathieuReversez-CV.pdf" class="four" download>
              <i class="fa fa-file  fa-2x"></i>
              <span>Mon CV</span>
            </a>
          </div>
        </transition>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: "BurgerMenu",
  data: function() {
    return {
      show: false,
    };
  },
  methods: {
    toggle: function() {
      this.$data.show = !this.$data.show;
    },
    letsgo(e) {
      if (e.target.classList[0] !== "nav-icon") {
        e.target.parentNode.classList.toggle("open");
        this.toggle();
        if (
          e.target.parentNode.parentNode.parentNode.classList[0] === "menuIn"
        ) {
          e.target.parentNode.parentNode.parentNode.classList.remove("menuIn");
          e.target.parentNode.parentNode.parentNode.classList.add("menuOut");
          setTimeout(function() {
            e.target.parentNode.parentNode.parentNode.classList.remove(
              "menuOut"
            );
          }, 1100);
        } else {
          e.target.parentNode.parentNode.parentNode.classList.add("menuIn");
        }
      } else {
        e.target.classList.toggle("open");
        this.toggle();
        if (e.target.parentNode.parentNode.classList[0] === "menuIn") {
          e.target.parentNode.parentNode.classList.remove("menuIn");
          e.target.parentNode.parentNode.classList.add("menuOut");
          setTimeout(function() {
            e.target.parentNode.parentNode.classList.remove("menuOut");
          }, 1100);
        } else {
          e.target.parentNode.parentNode.classList.add("menuIn");
        }
      }
    },
  },
};
</script>

<style scoped>
/* div:first-of-type {
  height: 20vh;
} */

img {
  margin: 2vw;
  max-height: 11em;
  border-radius: 12px;
}
nav {
  position: absolute;
  top: 68px;
  right: 20px;
}

.menuIn {
  /* height: 20vh !important; */
  width: 100vw !important;
  background: rgb(23, 24, 26);
  /* background-color: white; */
  animation: fadein 1s linear; /* IE 10+, Fx 29+ */
  /* z-index: 200; */
}
.menuOut {
  /* height: 20vh !important; */
  width: 100vw !important;
  background: rgb(23, 24, 26);
  /* background: white; */
  animation: fadeout 1s linear; /* IE 10+, Fx 29+ */
  z-index: 200;
}
div nav .nav-icon {
  opacity: 1 !important;
  width: 40px;
  z-index: 99;
}
/* .nav-icon {
  width: 40px;
  z-index: 99;
} */

.nav-icon:after,
.nav-icon:before,
.nav-icon div {
  /* background-color: white; */
  background-color: #17c4c5;
  border-radius: 3px;
  content: "";
  display: block;
  height: 5px;
  margin: 7px 0;
  transition: all 0.2s ease-in-out;
}

/*animation*/
.nav-icon.open:before {
  transform: translateY(12px) rotate(135deg);
}

.nav-icon.open:after {
  transform: translateY(-12px) rotate(-135deg);
}

.nav-icon.open div {
  transform: scale(0);
}

.sub-menu > a {
  width: auto;
  height: 60px;
  z-index: 99;
}

.one {
  position: absolute;
  top: 0px;
  left: -160px;
  color: white;
  /* color: #17c4c5; */
  display: flex;
  flex-direction: column;
  text-align: center;
  cursor: pointer;
}

.two {
  position: absolute;
  top: 80px;
  left: -138.6px;
  color: white;
  /* color: #17c4c5; */
  display: flex;
  flex-direction: column;
  text-align: center;
  cursor: pointer;
}
.three {
  position: absolute;
  top: 138.6px;
  left: -85px;
  color: white;
  /* color: #17c4c5; */
  display: flex;
  flex-direction: column;
  text-align: center;
  cursor: pointer;
}
.four {
  position: absolute;
  top: 160px;
  left: 20px;
  color: white;
  /* color: #17c4c5; */
  display: flex;
  flex-direction: column;
  text-align: center;
  cursor: pointer;
}

.nav-icon,
.nav-icon > div {
  cursor: pointer;
}

span {
  pointer-events: none;
}

a {
  text-decoration: none;
}

/*ANIMATION PART */
.slide-fade-enter-active {
  -webkit-animation: fadein 1s linear; /* Safari 4+ */
  -moz-animation: fadein 1s linear; /* Fx 5+ */
  -o-animation: fadein 1s linear; /* Opera 12+ */
  animation: fadein 1s linear; /* IE 10+, Fx 29+ */
}
.slide-fade-leave-to {
  -webkit-animation: fadeout 1s linear; /* Safari 4+ */
  -moz-animation: fadeout 1s linear; /* Fx 5+ */
  -o-animation: fadeout 1s linear; /* Opera 12+ */
  animation: fadeout 1s linear; /* IE 10+, Fx 29+ */
}

@-webkit-keyframes fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@-moz-keyframes fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@-webkit-keyframes fadeout {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

@-moz-keyframes fadeout {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

@keyframes fadeout {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
/* END ANIMATION PART*/

@media screen and (min-width: 40em) {
  div:first-of-type {
    display: none;
  }
}
</style>
