<template>
  <v-content>
   <div class="staticHero">
      <v-img max-height="150" src="../assets/images/ggg.jpg">
        <v-row align="end" class="lightbox white--text pa-2 fill-height">
          <v-col>
            <v-container>
              <div class="headline">FAQ</div>
            </v-container>
          </v-col>
        </v-row>
      </v-img>
    </div>
   <Faq />
     
    
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
