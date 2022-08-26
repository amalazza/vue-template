<template>
  <div id="app">
    <app-nav-bar />
    <router-view :key="$route.path" />
    <!-- <app-homepage /> -->
    <app-footer />
    
    
  </div>
</template>

<script>
import navBar from "@/components/Nav.vue";
// import homePage from "@/components/Home.vue";
import footerPage from "@/components/Footer.vue";

export default {
  components: {
    "app-nav-bar": navBar,
    // "app-homepage": homePage,
    "app-footer": footerPage,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>