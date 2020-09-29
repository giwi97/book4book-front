<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <Header />
    </v-app-bar>

    <v-main> </v-main>
  </v-app>
</template>

<script>
import Header from "./components/Header";

export default {
  name: "App",

  components: {
    Header,
  },

  data: () => ({
    //
  }),
};
</script>
