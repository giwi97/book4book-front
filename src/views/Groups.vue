<template>
  <v-content>
    <div class="staticHero">
      <v-img max-height="150" src="../assets/images/ggg.jpg">
        <v-row align="end" class="lightbox white--text pa-2 fill-height">
          <v-col>
            <v-container>
              <div class="headline">Groups</div>
            </v-container>
          </v-col>
        </v-row>
      </v-img>
    </div>

    <Topics />
    
  </v-content>
</template>

<script>
import Topics from "../components/Topics";
export default {
  name: "Groups",

   components: {
    Topics,
  
  },

  data() {
    return {
      items: [
        
      ],
    };
  },
};
</script>
