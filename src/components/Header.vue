<template>
  <div style="width:100%;">
    <v-toolbar
      flat
      style="background-image: linear-gradient(to right, black, black);"
    >
      <v-img
        max-height="80"
        max-width="120"
        src="../assets/images/logo.png"
      ></v-img>
      <v-spacer></v-spacer>
      <div
        class="text-right"
        style="margin-top:25px;background-image: linear-gradient(to right, black, black);"
      >
        <v-toolbar
          flat
          floating
          style="background-image: linear-gradient(to right, black, black);"
        >
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
      <div class="text-center" style="margin-top:10px;">
        <v-btn class="ma-2" rounded color="#FFB300" to="/signup">
          Sign-up
        </v-btn>
        <v-btn class="ma-2" outlined rounded color="#FFB300" to="/login">
          Login
        </v-btn>
      </div>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  name: "Header",

  data: () => ({}),
};
</script>
