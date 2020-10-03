<template>

  <v-content>
    <About />

  </v-content>
</template>

<script>
import About from "../components/About";


export default {
  name: "AboutUs",

 components: {
    About,
  },

  data() {
    return {
      items: [
      ],
    };
  },
};
</script>
