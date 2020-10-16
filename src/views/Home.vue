<template>
  <v-content>
    <Hero />
    <Gallery />
    <Featured />
    <Tweets />
  </v-content>
</template>

<script>
import Hero from "../components/Hero";
//import Description from "../components/Description";
import Featured from "../components/Featured";
import Gallery from "../components/Gallery"
import Tweets from "../components/Tweets"

export default {
  name: "Home",

  components: {
    Hero,
    //Description,
    Featured,
    Gallery,
    Tweets
  },

  data() {
    return {
      items: [],
    };
  },
};
</script>
