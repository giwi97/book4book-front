<template>
  <div class="block galleryBlock">
    <v-container>
      <h2 class="text-center">Latest Tweets</h2>
      <v-slide-group v-model="model" class="pa-1" center-active show-arrows>
        <v-slide-item
          v-for="n in n"
          :key="n.id"
          v-slot:default="{ active, toggle }"
        >
          <!-- <v-card
          :color="active ? 'primary' : 'grey lighten-1'"
          class="ma-4"
          height="200"
          width="100"
          
        > -->
          <v-card
            class="ma-8"
            color="#15202b"
            dark
            max-width="400"
            style="padding-left:6px;padding-right:6px;"
            :loading="loading"
            @click="toggle"
          >
            <v-card-title>
              <v-icon left>
                mdi-twitter
              </v-icon>
              <span class="title font-weight-light">Twitter</span>
            </v-card-title>

            <v-card-text class="font-weight-bold" style="font-size: small;">
             " {{n.message}} "
            </v-card-text>

            <v-card-actions>
              <v-list-item class="grow">
                <v-list-item-avatar color="grey darken-3">
                  <v-img
                    class="elevation-6"
                    alt=""
                    :src="n.src"
                  ></v-img>
                </v-list-item-avatar>

                <v-list-item-content>
                  <v-list-item-title>{{n.name}}</v-list-item-title>
                </v-list-item-content>

                <v-row align="center" justify="end">
                  <v-icon class="mr-1">
                    mdi-heart
                  </v-icon>
                  <span class="subheading mr-2">256</span>
                  <span class="mr-1">·</span>
                  <v-icon class="mr-1">
                    mdi-share-variant
                  </v-icon>
                  <span class="subheading">45</span>
                </v-row>
              </v-list-item>
            </v-card-actions>
          </v-card>
        </v-slide-item>
      </v-slide-group>
    </v-container>
  </div>
</template>
<script>
export default {
  name: "Tweets",

  data: () => ({n: [

      {
          id: 1,
        message: "Good job @book4book. You guys are amazing",
        name: "Peter Edmond",
        src: "https://cdn.vuetifyjs.com/images/lists/1.jpg"
      },
      {
          id: 2,
        message: "Amazing Work for the community",
        name: "Adam Levi",
        src: "https://cdn.vuetifyjs.com/images/lists/2.jpg"
      },
      {
          id: 3,
        message: "Well done @book4book !",
        name: "Amana Hazeem",
        src: "https://cdn.vuetifyjs.com/images/lists/3.jpg"
      },
      {
          id: 4,
        message: "Thank you @book4book!",
        name: "Jessica James",
        src: "https://cdn.vuetifyjs.com/images/lists/4.jpg"
      },
      {
          id: 5,
        message: "Cheering on from across the globe Earth globe. Job well done @book4book",
        name: "Madelyn Marie",
        src: "https://cdn.vuetifyjs.com/images/lists/5.jpg"
      },
      {
          id: 6,
        message: "Really enjoyed Book donation day 2020 with @book4book.",
        name: "Zaharan Hasheem",
        src: "https://cdn.vuetifyjs.com/images/lists/1.jpg"
      },
      {
          id: 7,
        message: "Keep the good work up. :)",
        name: "David Warner",
        src: "https://cdn.vuetifyjs.com/images/lists/2.jpg"
      }


  ]}),
};
</script>
<style>
#relateditemlist {
  overflow: hidden;
}
#relatedItemgroup {
  position: relative;
  width: 1900px;
  animation: myfirst 15s 2;
  animation-direction: alternate;
  animation-iteration-count: infinite;
}
</style>
