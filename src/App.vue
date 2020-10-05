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
