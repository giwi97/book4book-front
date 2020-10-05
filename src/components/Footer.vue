<template>
  <v-container>
    <v-footer padless>
      <v-card flat tile class="text-center">
        <div class="text-center">
          <v-btn class="ma-2" outlined rounded color="#26c6da">
            Contact Us
          </v-btn>
          <v-btn class="ma-2" outlined rounded color="#26c6da">
          <router-link to="/feedback">Feedback</router-link>  
          </v-btn>
          <v-btn class="ma-2" outlined rounded color="#26c6da">
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

        <v-card-text class="pt-0">
          Book4Book is a book exchange platform created by enthusiastic readers,
          tech geeks and nature lovers from Greece subsequently spread over the
          world. The World Summit Award 2013 paved the part for creating the Sri
          Lankan Chapter of Book4Book. Through this platform we aim to support
          the enthusiast readers via technology, within a citizen’s community
          acting without the mediation of third parties. The site is open to
          those who want to share or request books, and also encourages users to
          organize events for mass book exchange.
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text>
          {{ new Date().getFullYear() }} — <strong> © book4book.lk</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-container>
</template>

<script>
export default {
  name: "Footer",

  data: () => ({
    icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
  }),
};
</script>
