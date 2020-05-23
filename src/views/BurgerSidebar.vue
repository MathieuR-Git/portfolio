<template>
  <nav>
    <MobileBurger></MobileBurger>

    <MobileSidebar>
      <ul class="sidebar-panel-nav">
        <li>
          <a href="#about">Qui suis-je ?</a>
        </li>
        <li>
          <a href="#home">Mes projets</a>
        </li>

        <li>
          <a href="#contact">Me contacter</a>
        </li>
        <li>
          <a href="#contact">Mon CV</a>
        </li>
      </ul>
    </MobileSidebar>
  </nav>
</template>

<script>
// @ is an alias to /src
import MobileBurger from "@/components/Menu/MobileBurger.vue";
import MobileSidebar from "@/components/Menu/MobileSidebar.vue";

export default {
  name: "BurgerSidebar",
  components: {
    MobileBurger,
    MobileSidebar,
  },
};
</script>

<style scoped>
.sidebar-panel-nav {
  list-style: none;
  margin-top: 3vh;
  margin-right: 3vw;
}

li {
  margin: 0.3rem;
}
</style>
