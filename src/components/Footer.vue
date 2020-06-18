<template>
  <footer>
    <p>
      Retrouvez-moi également sur les réseaux sociaux
      <a href="https://github.com/MathieuR-Git" title="Mon GitHub"
        ><i class="fab fa-github fa-lg"></i
      ></a>
      <a
        href="https://www.linkedin.com/in/mathieu-reversez/"
        title="Ma page LinkedIn"
        ><i class="fab fa-linkedin-in fa-lg"></i
      ></a>
    </p>
    <!-- <a href="https://github.com/MathieuR-Git" title="Mon GitHub"
      ><i class="fab fa-github"></i
    ></a>
    <a
      href="https://www.linkedin.com/in/mathieu-reversez/"
      title="Ma page LinkedIn"
      ><i class="fab fa-linkedin-in"></i
    ></a> -->
    <small
      >&copy; 2020 -
      <a href="https://github.com/MathieuR-Git">Mathieu Reversez</a></small
    >
  </footer>
</template>

<style scoped>
footer {
  position: relative;
  /* display: flex;
  justify-content: center; */

  /* margin-top: -3em; */
  bottom: 0;
  left: 0;
  right: 0;
  padding: 0.2rem;
  background-color: rgba(194, 194, 194, 0.7);
  text-align: center;
  margin-top: 40px;
}
small {
  font-size: 1.15em;
}
p {
  margin: 0.5em;
}
span {
  margin-top: 0.7em;
  font-size: 0.8em;
}
a {
  text-decoration: none;
  color: white;
  margin-left: 0.5em;
}
i:hover {
  transform: scale(1.1);
}

.fa-github {
  color: #24292e;
}
.fa-linkedin-in {
  color: #0e76a8;
}
</style>
