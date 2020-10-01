<template>
  <v-content>
    <Hero />
    <Description />
    <Featured />
  </v-content>
</template>

<script>
import Hero from "../components/Hero";
import Description from "../components/Description";
import Featured from "../components/Featured";

export default {
  name: "Home",

  components: {
    Hero,
    Description,
    Featured,
  },

  data() {
    return {
      items: [],
    };
  },
};
</script>
