<template>
  <v-container>
    <div class="headers">
      <div class="text-right">
        <v-toolbar flat floating>
          <v-text-field
            hide-details
            single-line
            append-icon="mdi-magnify"
          ></v-text-field>
        </v-toolbar>
      </div>
      <v-toolbar flat>
        <v-spacer></v-spacer>

        <v-btn text>
          <router-link to="/">Home</router-link>
        </v-btn>

        <v-btn text>
          <router-link to="/bookrequest">Book Request</router-link>
        </v-btn>

        <v-btn text>
          <router-link to="/bookoffers">Book Offers</router-link>
        </v-btn>

        <v-btn text>
          <router-link to="/events">Events</router-link>
        </v-btn>

        <v-btn text>
          <router-link to="/members">Members</router-link>
        </v-btn>

        <v-btn text>
          <router-link to="/groups">Groups</router-link>
        </v-btn>

        <v-btn text>
          <router-link to="/howitworks">How it works</router-link>
        </v-btn>

        <v-btn text>
          <router-link to="/aboutus">About Us</router-link>
        </v-btn>
      </v-toolbar>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "HeaderS",

  data: () => ({}),
};
</script>
