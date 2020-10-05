<template>
  <v-container>
    <v-toolbar flat>
      <v-toolbar-title>Book4Book</v-toolbar-title>
      <v-spacer></v-spacer>
      <div class="text-right" style="padding-top:25px;">
        <v-toolbar flat floating>
          <v-text-field
            hide-details
            single-line
            label="Search"
            filled
            rounded
            dense
            append-icon="mdi-magnify"
          ></v-text-field>
        </v-toolbar>
      </div>
      <div class="text-center" style="padding-top:10px;">
        <v-btn class="ma-2" rounded color="#26c6da" to="/signup">
          Sign-up
        </v-btn>
        <v-btn class="ma-2" outlined rounded color="#26c6da" to="/login">
          Login
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
