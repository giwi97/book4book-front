<template>
  <v-app>
    <v-app-bar color="white" flat>
      <Header />
    </v-app-bar>
    <v-content>
      <Hero />
      <Description />
    </v-content>
  </v-app>
</template>

<script>
import Header from "./components/Header";
import Hero from "./components/Hero";
import Description from "./components/Description";

export default {
  name: "App",

  components: {
    Header,
    Hero,
    Description
  },

  data: () => ({
    //
  }),
};
</script>
