<template>
  <div class="block latestPostBlock">
    <v-container>
      <h2 class="text-center">Up Coming Event</h2>
      <v-row>
        <v-col cols="4" v-for="item in items" :key="item.id">
          <v-card :loading="loading" class="mx-auto my-8 rounded-xl" max-width="374" :elevation="24" style="background-image: linear-gradient(75deg, #40C4FF, #1E88E5);">
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
            class="d-flex transition-fast-in-fast-out"
            style="height: 100%;background-color: #4247DD; opacity: 0.5;"
          ><h2 class="my-16 pa-6" style="color: white;">{{item.titleHover}}</h2>
          </div>
        </v-expand-transition>
            </v-img>
            </v-hover>

            <v-card-title style="font-color:white;background-color: #E3F2FD;" >{{item.title}}</v-card-title>

            <v-card-text>

              <p  class="ma-4 white--text" :elevation="14">
                {{ item.description }}
              </p>
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
        titleHover: "Event Date & time 1"
      },
      {
        id: 2,
        title: "Upcoming event 2",
        description: "Hamlet is a story of how the ghost of a murdered king comes to haunt the living with tragic consequences. A vengeful ghost and a brother's murder...",
        src: require("../assets/images/10.jpg"),
        titleHover: "Event Date & time 2"
      },
      {
        id: 3,
        title: "Upcoming event 3",
        description: "The Lord of the Rings is an epic high fantasy novel by the English author and scholar J. R. R. Tolkien. Set in Middle-earth, the world at some distant time...",
        src: require("../assets/images/10.jpg"),
        titleHover: "Event Date & time 3"
      }
    ]
  }),
};
</script>
