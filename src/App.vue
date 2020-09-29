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
  </v-app>
</template>

<script>
import Header from "./components/Header";
import Hero from "./components/Hero";
import Description from "./components/Description";
import Featured from "./components/Featured";

export default {
  name: "App",

  components: {
    Header,
    Hero,
    Description,
    Featured
  },

  data: () => ({
    //
  }),
};
</script>
