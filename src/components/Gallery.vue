<template>
  <div class="block galleryBlock">
    <v-container>
      <h2 class="text-center">Gallery</h2>
      <v-row>
        <v-col
          v-for="item in items"
          :key="item.id"
          class="d-flex child-flex"
          cols="6"
          sm="4"
        >
          <v-card flat tile class="d-flex">
            <v-hover v-slot:default="{ hover }">
              <v-img :src="item.src" aspect-ratio="1" class="grey lighten-2">
                <v-expand-transition>
                  <div
                    v-if="hover"
                    class="d-flex transition-fast-in-fast-out black darken-2 v-card--reveal display-1 white--text"
                    style="height: 100%;"
                  ><h3 style="align-text:justify;">
                    Book Donation Day 2020
                    </h3>
                  </div>
                </v-expand-transition>
                <template v-slot:placeholder>
                  <v-row
                    class="fill-height ma-0"
                    align="center"
                    justify="center"
                  >
                    <v-progress-circular
                      indeterminate
                      color="grey lighten-5"
                    ></v-progress-circular>
                  </v-row>
                </template>
              </v-img>
            </v-hover>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Gallery",
  data() {
    return {
      items: [
        {
          id: 1,
          src: require("../assets/images/img1.jpg"),
        },
        {
          id: 2,
          src: require("../assets/images/img2.jpg"),
        },
        {
          id: 3,
          src: require("../assets/images/img3.jpg"),
        },
        {
          id: 4,
          src: require("../assets/images/img4.jpg"),
        },
        {
          id: 5,
          src: require("../assets/images/img5.jpg"),
        },
        {
          id: 6,
          src: require("../assets/images/img6.jpg"),
        },
        {
          id: 7,
          src: require("../assets/images/img7.jpg"),
        },
        {
          id: 8,
          src: require("../assets/images/img8.jpg"),
        },
        {
          id: 9,
          src: require("../assets/images/img9.jpg"),
        },
      ],
    };
  },
};
</script>
<style>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.5;
  position: absolute;
  width: 100%;
}
</style>
