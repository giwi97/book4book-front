<template>
  <v-content>
    <Donate />
  </v-content>
</template>

<script>

import Donate from "../components/Donate";

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

export default {
  name: "BookOffers",

   components: {
    Donate,
  },

  data() {
    return {
      items: [
      
      ],
    };
  },
};
</script>
