<template>

  <v-container>
    <v-footer padless>
      <v-card flat tile class="text-center">
        <div class="text-center">
          <v-btn class="ma-2" outlined rounded color="#26c6da">
          <router-link to="/contactus">Contact Us</router-link>
          </v-btn>
          <v-btn class="ma-2" outlined rounded color="#26c6da">
          <router-link to="/feedback">Feedback</router-link>  
          </v-btn>
          <v-btn class="ma-2" outlined rounded color="#26c6da">
            FAQ
          </v-btn>
        </div>

  <div style="width: 100%;">
    <v-card
      flat
      tile
      dark
      class="text-center"
      style="background-image: linear-gradient(to right, #212121, #212121);width:100%;"
    >
      <div class="text-center">
        <v-btn class="ma-2" outlined rounded color="#26C6DA">
          Contact Us
        </v-btn>
        <v-btn class="ma-2" outlined rounded color="#26C6DA">
          Feedback
        </v-btn>
        <v-btn class="ma-2" outlined rounded color="#26C6DA">
          FAQ
        </v-btn>
      </div>


      <v-card-text>
        <v-btn v-for="icon in icons" :key="icon" class="mx-4" icon>
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text>
        {{ new Date().getFullYear() }} — <strong> © book4book.lk</strong>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "Footer",

  data: () => ({
    icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
  }),
};
</script>
