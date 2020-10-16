<template>
  <v-content>
     <div class="staticHero">
      <v-img max-height="150" src="../assets/images/deg.jpg">
        <v-row align="end" class="lightbox white--text pa-2 fill-height">
          <v-col>
            <v-container >
              <h1  style="font-size:35px" class="text-center font-weight-regular">Guide</h1>
            </v-container>
          </v-col>
        </v-row>
      </v-img>
    </div>
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
