<template>
  <nav>
    <ul>
      <li>Qui suis-je?</li>
      <li>Mes projets</li>
      <li>Me contacter</li>
      <li>Mon CV</li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "BurgerMenu",
};
</script>

<style scoped>
nav {
  display: flex;
  flex-direction: row;
}

li {
  list-style-type: none;
}
</style>
