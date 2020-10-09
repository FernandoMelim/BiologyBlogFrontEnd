<template>
  <div id="app">
    <PrincipalImage />
    <Menu />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Menu from "@/components/templates/Menu.vue";
import Footer from "@/components/templates/Footer.vue";
import PrincipalImage from "@/components/templates/PrincipalImage.vue";
export default {
  components: { Menu, PrincipalImage, Footer },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
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
</style>
