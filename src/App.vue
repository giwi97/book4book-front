<template>
  <v-app>
    <v-app-bar
      style="background-image: linear-gradient(to right, #C04848, #480048);"
      flat
    >
      <Header />
    </v-app-bar>

    <HeaderS />

    <router-view> </router-view>

    <v-footer
      style="background-image: linear-gradient(to right, #C04848, #480048);width:100%;"
    >
      <Footer />
    </v-footer>
  </v-app>
</template>

<script>
import Header from "./components/Header";
import HeaderS from "./components/HeaderS";
import Footer from "./components/Footer";

export default {
  name: "App",

  components: {
    Header,
    Footer,
    HeaderS,
  },

  data: () => ({
    //
  }),
};
</script>
