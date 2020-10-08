<template>
  <v-content>
    <UtubeVid />
  </v-content>
</template>

<script>
import UtubeVid from "../components/UtubeVid";

export default {
  name: "HowItWorks",

  components: {
    UtubeVid,
  },

  data() {
    return {
      items: [],
    };
  },
};
</script>
