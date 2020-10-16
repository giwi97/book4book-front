<template>
<v-content>
  <div class="block latestPostBlock">
  <h2 class="text-center">Contact US </h2>
  </div>

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
