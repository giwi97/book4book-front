<template>
  <v-content>
    <Hero />
    <Gallery />
    <Featured />
  </v-content>
</template>

<script>
import Hero from "../components/Hero";
//import Description from "../components/Description";
import Featured from "../components/Featured";
import Gallery from "../components/Gallery"

export default {
  name: "Home",

  components: {
    Hero,
    //Description,
    Featured,
    Gallery
  },

  data() {
    return {
      items: [],
    };
  },
};
</script>
