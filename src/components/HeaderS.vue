<template>
  <v-container>
    <v-row>
      <v-col cols="12" class="py-2">
        <v-btn-toggle v-model="text" tile color="deep-purple accent-3" group>
          <v-btn href="/">
            Home
          </v-btn>

          <v-btn href="/bookrequest">
            Book Request
          </v-btn>

          <v-btn href="/bookoffers">
            Book Offers
          </v-btn>

          <v-btn href="/events">
            Events
          </v-btn>

          <v-btn href="/members">
            Members
          </v-btn>

          <v-btn href="/groups">
            Groups
          </v-btn>

          <v-btn href="/howitworks">
            How it works>
          </v-btn>

          <v-btn href="/aboutus">
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
