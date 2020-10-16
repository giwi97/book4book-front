<template>
  <div class="block latestPostBlock">
    <v-container>
      <h2 class="text-center">Featured</h2>
      <v-row>
        <v-col cols="12" md="4" v-for="item in items" :key="item.id">
          <v-card :loading="loading" class="mx-auto my-12" max-width="400" light>
            <template slot="progress">
              <v-progress-linear
                color="deep-purple"
                height="10"
                indeterminate
              ></v-progress-linear>
            </template>

            <v-img
              height="250"
              :src="item.src"
            ></v-img>

            <v-card-title style="background-color:white;font-weight:bold;">{{item.title}}</v-card-title>

            <v-card-text>
              <v-row align="center" class="mx-0">
                <v-rating
                  :value="item.value"
                  color="amber"
                  dense
                  half-increments
                  readonly
                  size="14"
                ></v-rating>

                <div class="grey--text ml-4">
                  {{item.ratings}}
                </div>
              </v-row>

              <div class="my-4 subtitle-1">
                {{item.subtitle}}
              </div>

              <div>
                {{ item.description }}
              </div>
            </v-card-text>

            <v-divider class="mx-4"></v-divider>

            <v-card-actions>
              <v-btn color="deep-purple lighten-2" text to="/BookCategory">
                Find
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Featured",

  data: () => ({
        items: [
      {
        id: 1,
        title: "Village By The Sea",
        subtitle: "Anita Desai",
        description: "The novel follows the life of a small family forced to live in poverty. The parents are unable to take care of their four children—the mother is sick ...",
        src: require("../assets/images/10.jpg"),
        ratings: "4.5 (413)",
        value: "4.5"
      },
      {
        id: 2,
        title: "Hamlet",
        subtitle: "William Shakespeare",
        description: "Hamlet is a story of how the ghost of a murdered king comes to haunt the living with tragic consequences. A vengeful ghost and a brother's murder...",
        src: require("../assets/images/11.jpg"),
        ratings: "4.0 (369)",
        value: "4.0"
      },
      {
        id: 3,
        title: "The Lord Of The Rings",
        subtitle: "J R R Tolkien",
        description: "The Lord of the Rings is an epic high fantasy novel by the English author and scholar J. R. R. Tolkien. Set in Middle-earth, the world at some distant time...",
        src: require("../assets/images/12.jpg"),
        ratings: "4.0 (502)",
        value: "4.0"
      }
    ]
  }),
};
</script>
