<template>
  <div class="app">
    <Navigation />
    <Nuxt />
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from "vue"
import Navigation from "../components/Navigation.vue"
import Footer from "../components/Footer.vue"

export default Vue.extend({
  name: "app",
  components: { Navigation, Footer },
  data() {
    return {}
  },
  created() {},
  mounted() {},
  methods: {},
  watch: {},
})
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Quicksand", sans-serif;
}
.app {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
}
.container {
  max-width: 1440px;
  margin: 0 auto;
}
.link {
  cursor: pointer;
  text-decoration: none;
  text-transform: uppercase;
  color: black;
}
.link-light {
  color: #fff;
}

.arrow {
  margin-left: 8px;
  width: 12px;
  path {
    fill: #000;
  }
}

.arrow-light {
  path {
    fill: #fff;
  }
}
</style>
