<template>
  <v-app>
    <v-app-bar flat app color="#212121">
      <Header />
    </v-app-bar>

    <router-view> </router-view>

    <v-divider></v-divider>
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
