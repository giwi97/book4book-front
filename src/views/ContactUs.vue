<template>
<v-content>
  <div class="staticHero">
      <v-img max-height="150" src="../assets/images/ggg.jpg">
        <v-row align="end" class="lightbox white--text pa-2 fill-height">
          <v-col>
            <v-container>
              <div class="headline">Contact Us</div>
            </v-container>
          </v-col>
        </v-row>
      </v-img>
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
