<template>
  <v-app>
    <v-app-bar color="white" flat>
      <Header />
    </v-app-bar>
    <HeaderS />
    <router-view> </router-view>

    <v-footer>
      <Footer />
    </v-footer>
  </v-app>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
import HeaderS from "./components/HeaderS";

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
