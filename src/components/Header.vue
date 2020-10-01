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
  </v-container>
</template>

<script>
export default {
  name: "Header",

  data: () => ({}),
};
</script>
