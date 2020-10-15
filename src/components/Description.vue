<template>
  <v-container>
    <div class="descriptionCard">
      <v-card
        class="mx-auto rounded-xl"
        color="#3b453f"
        dark
        max-width="700"
        style="background-image: linear-gradient(to right, #c04848, #480048)"
      >
        <p class="text-center">
          Book4Book is a book exchange platform created by enthusiastic readers,
          tech geeks and nature lovers from Greece subsequently spread over the
          world. The World Summit Award 2013 paved the part for creating the Sri
          Lankan Chapter of Book4Book. Through this platform we aim to support
          the enthusiast readers via technology, within a citizen’s community
          acting without the mediation of third parties. The site is open to
          those who want to share or request books, and also encourages users to
          organize events for mass book exchange.
        </p>

        <v-card-actions>
          <div class="text-center">
            <router-link to="/BookCategory">
              <v-btn rounded color="#26c6da" dark elevation="24" block>
                Explore Our Categories
              </v-btn>
            </router-link>
          </div>
        </v-card-actions>
      </v-card>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "Description",

  data: () => ({}),
  mounted: function () {
    this.getId();
  },
  methods: {
    
  },
};
</script>
