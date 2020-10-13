<template>
<div>
    <div class="staticHero">
      <v-img max-height="280" src="../assets/images/img14.jpg">
        <v-row align="end" class="lightbox white--text pa-2 fill-height">
          <v-col>
            <v-container>
              <div class="headline">Members</div>
            </v-container>
          </v-col>
        </v-row>
      </v-img>
    </div>
  <div class="block">
    <h2 class="text-center">Members</h2>

    <v-card color="#E0E0E0" width="500" style="margin:auto;">

      <v-card-text>
        <v-autocomplete
          v-model="model"
          :items="items"
          :loading="isLoading"
          :search-input.sync="search"
          color="grey"
          hide-no-data
          hide-selected
          item-text="Name"
          item-value="API"
          label="Search Member by Name"
          placeholder="Start typing to Search"
          append-icon="mdi-magnify"
          return-object
        ></v-autocomplete>
      </v-card-text>
      <v-divider></v-divider>
      <v-expand-transition>
        <v-list v-if="model" class="#E0E0E0 lighten-3">
          <v-list-item v-for="(field, i) in fields" :key="i">
            <v-list-item-content>
              <v-list-item-subtitle v-text="field.key"></v-list-item-subtitle>
              <v-list-item-title v-text="field.value"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-expand-transition>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn :disabled="!model" color="red darken-3" @click="model = null">
          Clear
          <v-icon right>
            mdi-close-circle
          </v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
    <br />
    <br />
  </div>
  </div>
</template>

<script>
export default {
  name: "MembersP",
  data: () => ({
    addressLimit: 60,
    entries: [],
    isLoading: false,
    model: null,
    search: null,
  }),

  computed: {
    fields() {
      if (!this.model) return [];

      return Object.keys(this.model).map((key) => {
        return {
          key,
          value: this.model[key] || "n/a",
        };
      });
    },
    items() {
      return this.entries.map((entry) => {
        const Address =
          entry.Address.length > this.addressLimit
            ? entry.Address.slice(0, this.addressLimit) + "..."
            : entry.Address;

        return Object.assign({}, entry, { Address });
      });
    },
  },

  watch: {
    search() {
      // Items have already been loaded
      if (this.items.length > 0) return;

      // Items have already been requested
      if (this.isLoading) return;

      this.isLoading = true;

      // Lazily load input items
      const res = require("../assets/dataMem.json");
      //const { a, b } = test

      const { count, entries } = res;
      this.count = count;
      this.entries = entries;

      // .catch(err => {
      //   console.log(err)
      // })
      // .finally(() => (this.isLoading = false))
    },
  },
};
</script>
