<template>
  <v-container>
    <v-row>
      <v-col cols="12" class="py-2">
        <v-btn-toggle v-model="text" tile color="deep-purple accent-3" group>
          <v-btn to="/">
            Home
          </v-btn>

          <v-btn to="/bookrequest">
            Book Request
          </v-btn>

          <v-btn to="/bookoffers">
            Book Offers
          </v-btn>

          <v-btn to="/events">
            Events
          </v-btn>

          <v-btn to="/members">
            Members
          </v-btn>

          <v-btn to="/groups">
            Groups
          </v-btn>

          <v-btn to="/howitworks">
            How it works>
          </v-btn>

          <v-btn to="/aboutus">
            About Us
          </v-btn>
        </v-btn-toggle>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "HeaderS",

  data: () => ({}),
};
</script>
