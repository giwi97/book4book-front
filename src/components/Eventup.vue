<template>
  <div class="block latestPostBlock">
    <v-container>
      <h2 class="text-center">Up Coming Event</h2>
      <v-row>
        <v-col cols="4" v-for="item in items" :key="item.id">
          <v-card :loading="loading" class="mx-auto my-12" max-width="374">
            <template slot="progress">
              <v-progress-linear
                color="deep-purple"
                height="10"
                indeterminate
              ></v-progress-linear>
            </template>
            <v-hover v-slot:default="{ hover }">
                 
            <v-img
              height="250"
              :src="item.src"
            >
            <v-expand-transition>
          <div
            v-if="hover"
            class="d-flex transition-fast-in-fast-out orange lighten-2 v-card--reveal display-3 white--text"
            style="height: 100%; opacity:40%;"
          >
          </div>
        </v-expand-transition>
            </v-img>
            </v-hover>

            <v-card-title>{{item.title}}</v-card-title>

            <v-card-text>

              <div>
                {{ item.description }}
              </div>
            </v-card-text>

            <v-divider class="mx-4"></v-divider>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Eventup",

  data: () => ({
        items: [
      {
        id: 1,
        title: "Upcoming event 1",
        description: "The novel follows the life of a small family forced to live in poverty. The parents are unable to take care of their four children—the mother is sick ...",
        src: require("../assets/images/10.jpg"),
        ratings: "4.5 (413)",
        value: "4.5"
      },
      {
        id: 2,
        title: "Upcoming event 2",
        description: "Hamlet is a story of how the ghost of a murdered king comes to haunt the living with tragic consequences. A vengeful ghost and a brother's murder...",
        src: require("../assets/images/10.jpg"),
        ratings: "4.0 (369)",
        value: "4.0"
      },
      {
        id: 3,
        title: "Upcoming event 3",
        description: "The Lord of the Rings is an epic high fantasy novel by the English author and scholar J. R. R. Tolkien. Set in Middle-earth, the world at some distant time...",
        src: require("../assets/images/10.jpg"),
        ratings: "4.0 (502)",
        value: "4.0"
      }
    ]
  }),
};
</script>
