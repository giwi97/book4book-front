<template>
  <v-app>
    <v-app-bar color="white" flat>
      <Header />
    </v-app-bar>
    <v-content>
      <Hero />
      <Description />
      <Featured />
    </v-content>
    <v-footer>
    <Footer />
    </v-footer>
  </v-app>
</template>

<script>
import Header from "./components/Header";
import Hero from "./components/Hero";
import Description from "./components/Description";
import Featured from "./components/Featured";
import Footer from "./components/Footer"

export default {
  name: "App",

  components: {
    Header,
    Hero,
    Description,
    Featured,
    Footer
  },

  data: () => ({
    //
  }),
};
</script>
