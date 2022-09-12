<template>
  <div id="app">
    <div v-if="paramUrl === 'daftar'">
      <div>
        <router-view :key="$route.path" />
      </div>
    </div>

    <div v-else-if="paramUrl === 'login'">
      <div>
        <router-view :key="$route.path" />
      </div>
    </div>
    <div v-else-if="paramUrl === 'bantuan'">
      <div>
        <router-view :key="$route.path" />
      </div>
    </div>
    <div v-else-if="paramUrl === 'blog'">
      <div>
        <router-view :key="$route.path" />
      </div>
    </div>
    <div v-else>
      <app-nav-bar />
      <router-view :key="$route.path" />
      <!-- <app-homepage /> -->
      <app-footer />
    </div>





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
  computed: {
    paramUrl() {
      // let url_string = window.location.href;
      // let url = new URL(url_string);
      // console.log(url)
      return this.$route.name;
    },
  }
};
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;600;700;800;900&display=swap');

#app {
  font-family: 'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  font-family: 'Poppins', sans-serif !important;
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