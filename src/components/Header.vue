<template>
  <v-container>
    <v-toolbar flat>
      <v-toolbar-title>Book4Book</v-toolbar-title>
      <v-spacer></v-spacer>
      <div class="text-right" style="padding-top:10px;">
        <v-toolbar flat floating>
          <v-text-field
            label="Search"
            filled
            rounded
            dense
            append-icon="mdi-magnify"
          ></v-text-field>
        </v-toolbar>
      </div>
      <div class="text-center" style="padding-top:10px;">
        <v-btn class="ma-2" rounded color="#26c6da">
          <router-link to="/signup">Sign-up</router-link>
        </v-btn>
        <v-btn class="ma-2" outlined rounded color="#26c6da">
          <router-link to="/login">Login</router-link>
        </v-btn>
      </div>
    </v-toolbar>
  </v-container>
</template>

<script>
export default {
  name: "Header",

  data: () => ({}),
};
</script>
