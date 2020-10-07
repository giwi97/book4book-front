<template>
<v-content>
  <h1>Contact US </h1>
  <br>
  <Contact />
</v-content>
</template>

<script>

import Contact from "../components/Contact";
export default {
  name: "ContactUs",

   components: {
    Contact,
   
  },


  data() {
    return {
      items: [
       
      ],
    };
  },
};
</script>
