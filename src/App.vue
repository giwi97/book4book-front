<template>
  <v-app>
    <v-app-bar flat app color="white">
    <Header />
    </v-app-bar>

    <router-view> </router-view>

    <Footer />
  </v-app>
</template>

<script>
import Header from "./components/Header";
// import HeaderS from "./components/HeaderS";
import Footer from "./components/Footer";

export default {
  name: "App",

  components: {
    Header,
    Footer,
    // HeaderS,
  },

  data: () => ({
    //
  }),
};
</script>
