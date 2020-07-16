<template>
  <div>
    <span value="all" @click="filterProject">Tous</span>
    <span value="VueJS" @click="filterProject">VueJS</span>
    <span value="React" @click="filterProject">React</span>
    <span value="Angular" @click="filterProject">Angular</span>
    <span value="HTML" @click="filterProject">HTML</span>
    <span value="Bootstrap" @click="filterProject">Bootstrap</span>
    <!-- <button value="all" @click="filterProject">Tous</button>
    <button value="VueJS" @click="filterProject">VueJS</button>
    <button value="React" @click="filterProject">React</button>
    <button value="Angular" @click="filterProject">Angular</button>
    <button value="HTML" @click="filterProject">HTML</button>
    <button value="Bootstrap" @click="filterProject">Bootstrap</button> -->
  </div>
</template>

<script>
export default {
  name: "FilterButtons",
  methods: {
    filterProject: function(e) {
      const allProjects = document.getElementsByClassName("project");
      const allButtons =
        document.getElementsByTagName("button") ||
        document.getElementsByTagName("span");

      //INACTIVE PART
      if (e.target.classList.contains("active")) {
        e.target.classList.remove("active");
        for (let i = 0; i < allProjects.length; i++) {
          allProjects[i].style.display = "block";
        }
      } else {
        //ACTIVE PART
        for (let i = 0; i < allButtons.length; i++) {
          allButtons[i].classList.remove("active");
        }
        e.target.classList.add("active");
        for (let i = 0; i < allProjects.length; i++) {
          if (e.target.value === "all") {
            allProjects[i].style.display = "block";
          } else {
            console.log(allProjects[i].classList);
            if (!allProjects[i].classList.contains(e.target.value)) {
              console.log(e.target.value);
              allProjects[i].style.display = "none";
            } else {
              allProjects[i].style.display = "block";
            }
          }
        }
      }
    },
  },
};
</script>

<style scoped lang="scss">
// @keyframes fade {
//   from {
//     opacity: 0;
//     height: 0%;
//   }

//   to {
//     opacity: 1;
//     height: 100%;
//   }
// }

// @keyframes unfade {
//   from {
//     opacity: 1;
//     height: 100%;
//   }

//   to {
//     opacity: 0;
//     height: 0%;
//   }
// }

// .show {
//   display: block;
//   visibility: visible;
//   opacity: 1;
//   animation: fade 1s;
// }

// .disappears {
//   display: none;
//   opacity: 0;
//   visibility: hidden;
//   padding: 10px;
//   animation: unfade 1s;
// }

.active {
  transform: scale(1.2);
  border-color: white;
  border-radius: 3px;
  color: white;
}
// button:focus {
//   outline: none;
//   box-shadow: none;
// }
@media screen and (max-width: 40em) {
  div {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 5%;
  }
  button {
    flex: 1 1 30%;
    position: relative;
    background: none;
    cursor: pointer;
    color: aqua;
    text-transform: uppercase;
    text-decoration: none;
    margin: 1em;

    border: 0.2em solid aqua;
    padding: 0.5em 1em;
    &::before {
      content: "";
      display: block;
      position: absolute;
      width: 10%;
      background: red;
      // background: #222;
      height: 0.3em;
      right: 20%;
      top: -0.21em;
      transform: skewX(-45deg);
      -webkit-transition: all 0.45s cubic-bezier(0.86, 0, 0.07, 1);
      transition: all 0.45s cubic-bezier(0.86, 0, 0.07, 1);
    }
    &::after {
      content: "";
      display: block;
      position: absolute;
      width: 10%;
      background: transparent;
      // background: #222;
      height: 0.3em;
      left: 20%;
      bottom: -0.25em;
      transform: skewX(45deg);
      -webkit-transition: all 0.45 cubic-bezier(0.86, 0, 0.07, 1);
      transition: all 0.45s cubic-bezier(0.86, 0, 0.07, 1);
    }
    &:hover {
      transform: scale(1.2);
      &::before {
        right: 80%;
      }
      &::after {
        left: 80%;
      }
    }
  }
}
@media screen and (min-width: 40em) {
  div {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 5%;
  }
  span {
    position: relative;
    background: none;
    cursor: pointer;
    color: #495867;
    text-transform: uppercase;
    text-decoration: none;
    margin: 1em;

    border: 0.2em solid #495867;
    padding: 0.5em 1em;
    transition: transform 450ms, border-radius 350ms, border-color 450ms,
      color 450ms;
    &::before {
      content: "";
      display: block;
      position: absolute;
      width: 10%;
      background: #eff6e0;
      // background: #222;
      height: 0.3em;
      right: 20%;
      top: -0.21em;
      transform: skewX(-45deg);
      -webkit-transition: all 0.45s cubic-bezier(0.86, 0, 0.07, 1);
      transition: all 0.45s cubic-bezier(0.86, 0, 0.07, 1);
    }
    &::after {
      content: "";
      display: block;
      position: absolute;
      width: 10%;
      background: #eff6e0;
      height: 0.3em;
      left: 20%;
      bottom: -0.25em;
      transform: skewX(45deg);
      -webkit-transition: all 0.45 cubic-bezier(0.86, 0, 0.07, 1);
      transition: all 0.45s cubic-bezier(0.86, 0, 0.07, 1);
    }
    &:hover {
      transform: scale(1.15);
      border-radius: 10px;
      border-color: black;
      color: black;
      &::before {
        right: 80%;
      }
      &::after {
        left: 80%;
      }
    }
  }
}
</style>
