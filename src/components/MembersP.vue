<template>
  <div class="block latestPostBlock">
    <h2 class="text-center">Members</h2>
    <v-card color="red lighten-2" dark>
      <v-card-title class="headline red lighten-3">
        Search for Public APIs
      </v-card-title>
      <v-card-text>
        Explore hundreds of free API's ready for consumption! For more
        information visit
        <a
          class="grey--text text--lighten-3"
          href="https://github.com/toddmotto/public-apis"
          target="_blank"
          >the Github repository</a
        >.
      </v-card-text>
      <v-card-text>
        <v-autocomplete
          v-model="model"
          :items="items"
          :loading="isLoading"
          :search-input.sync="search"
          color="white"
          hide-no-data
          hide-selected
          item-text="Description"
          item-value="API"
          label="Public APIs"
          placeholder="Start typing to Search"
          prepend-icon="mdi-database-search"
          return-object
        ></v-autocomplete>
      </v-card-text>
      <v-divider></v-divider>
      <v-expand-transition>
        <v-list v-if="model" class="red lighten-3">
          <v-list-item v-for="(field, i) in fields" :key="i">
            <v-list-item-content>
              <v-list-item-title v-text="field.value"></v-list-item-title>
              <v-list-item-subtitle v-text="field.key"></v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-expand-transition>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn :disabled="!model" color="grey darken-3" @click="model = null">
          Clear
          <v-icon right>
            mdi-close-circle
          </v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "MembersP",

  data() {
    const srcs = {
      1: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
      2: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
      3: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
      4: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
      5: "https://cdn.vuetifyjs.com/images/lists/5.jpg",
    };

    return {
      autoUpdate: true,
      isUpdating: false,
      name: "",
      people: [
        { header: "Group 1" },
        {
          name: "Sandra Adams",
          group: "Group 1",
          avatar: srcs[1],
          email: "sandra@gmail.com",
        },
        {
          name: "Ali Connors",
          group: "Group 1",
          avatar: srcs[2],
          email: "alicon@gmail.com",
        },
        {
          name: "Trevor Hansen",
          group: "Group 1",
          avatar: srcs[3],
          email: "trevor@gmail.com",
        },
        {
          name: "Tucker Smith",
          group: "Group 1",
          avatar: srcs[2],
          email: "tuck@gmail.com",
        },
        { divider: true },
        { header: "Group 2" },
        {
          name: "Britta Holt",
          group: "Group 2",
          avatar: srcs[4],
          email: "britta@gmail.com",
        },
        {
          name: "Jane Smith ",
          group: "Group 2",
          avatar: srcs[5],
          email: "jane@gmail.com",
        },
        {
          name: "John Smith",
          group: "Group 2",
          avatar: srcs[1],
          email: "john@gmail.com",
        },
        {
          name: "Sandra Williams",
          group: "Group 2",
          avatar: srcs[3],
          email: "sandrawil@gmail.com",
        },
      ],
      title: "The summer breeze",
    };
  },

  watch: {
    isUpdating(val) {
      if (val) {
        setTimeout(() => (this.isUpdating = false), 3000);
      }
    },
  },

  methods: {
    remove(item) {
      const index = this.friends.indexOf(item.name);
      if (index >= 0) this.friends.splice(index, 1);
    },
  },
};
</script>
