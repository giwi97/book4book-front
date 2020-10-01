<template>
  <v-container>
    <v-toolbar prominent flat>
      <v-toolbar-title>Book4Book</v-toolbar-title>
      <v-spacer></v-spacer>
      <div class="text-center" style="padding-top:70px;">
        <v-btn class="ma-2" rounded color="#26c6da">
          Sign-up
        </v-btn>
        <v-btn class="ma-2" outlined rounded color="#26c6da">
          Login
        </v-btn>
      </div>
    </v-toolbar>
    <v-toolbar flat>
      <v-spacer></v-spacer>

      <v-toolbar-items>
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
      </v-toolbar-items>
    </v-toolbar>
  </v-container>
</template>

<script>
export default {
  name: "Header",

  data: () => ({}),
};
</script>
