<template>
  <div class="block latestPostBlock">
    <h2 class="text-center">Members</h2>

    <v-card color="red lighten-2" dark width="500" style="margin:auto;">
      <v-card-title class="headline red lighten-3">
        Search for Members
      </v-card-title>
      <v-card-text>
        Explore hundreds of Members around you..
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
        <v-list v-if="model" class="red lighten-3">
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
        <v-btn :disabled="!model" color="grey darken-3" @click="model = null">
          Clear
          <v-icon right>
            mdi-close-circle
          </v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
    <br>
    <br>
  </div>
</template> 


<script>

  export default {
    name: "MembersP",
    data: () => ({
      descriptionLimit: 60,
      entries: [],
      isLoading: false,
      model: null,
      search: null,
    }),

    computed: {
      fields () {
        if (!this.model) return []

        return Object.keys(this.model).map(key => {
          return {
            key,
            value: this.model[key] || 'n/a',
          }
        })
      },
      items () {
        return this.entries.map(entry => {
          const Description = entry.Description.length > this.descriptionLimit
            ? entry.Description.slice(0, this.descriptionLimit) + '...'
            : entry.Description

          return Object.assign({}, entry, { Description })
        })
      },
    },

    watch: {
      search () {
        // Items have already been loaded
        if (this.items.length > 0) return

        // Items have already been requested
        if (this.isLoading) return

        this.isLoading = true

        // Lazily load input items
        const res = require('../assets/dataMem.json')
        //const { a, b } = test


            const { count, entries } = res
            this.count = count
            this.entries = entries
  
          // .catch(err => {
          //   console.log(err)
          // })
          // .finally(() => (this.isLoading = false))
      },
    },
  }
</script>