<template>
  <v-content>
    <div class="block latestPostBlock">
    <h2 class="text-center">FAQ</h2>
    
    
   <Faq />
    </div>
  </v-content>
</template>

<script>
import Faq from "../components/Faq";
export default {
  name: "FAQpage",

   components: {
    Faq,
  
  },

  data() {
    return {
      items: [
        
      ],
    };
  },
};
</script>
