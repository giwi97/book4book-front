<template>
  <v-card
    class="mx-auto elevation-6"
    color="white"
    
    style="max-width: 1275px"
  >
  <div id="addBook">Add Your Review</div>
    <v-row justify="space-between">
      <v-col cols="12" sm="6">
        <v-card-title>
          <div>
            <div class="black--text headline">Rate</div>
          </div>
        </v-card-title>
        <v-card-actions class="pa-4">
          <v-rating
            v-model="rating"
            background-color="black"
            color="yellow accent-4"
            dense
            half-increments
            hover
            size="40"
          ></v-rating>
          <span class="black--text text--lighten-2 caption mr-2">
            ({{ rating }})
          </span>
        </v-card-actions>
      </v-col>
      <v-col cols="12" sm="6">
        <v-textarea
          background-color="white"
          color="black"
          label="Add Additional comment"
        ></v-textarea>
        </v-col>
    </v-row>
        <br />
         <div class="text-center">
    <v-bottom-sheet
      v-model="sheet"
      persistent
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="green"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Submit Your Review
        </v-btn>
      </template>
      <v-sheet
        class="text-center"
        height="200px"
      >
        <v-btn
          class="mt-6"
          text
          color="error"
          @click="sheet = !sheet"
        >
          close
        </v-btn>
        <div class="py-3">
          Thank for review Our Website.
        </div>
      </v-sheet>
    </v-bottom-sheet>
  </div>
      
  </v-card>
</template>

<script>
export default {
  data: () => ({
    rating: 1,
     sheet: false,
  }),
};
</script>
<style>
#addBook {
  height: 45px;
  background-color: teal;
  color: white;
  font-weight: bold;
  text-align: center;
  padding-top: 10px;
  font-size: 18px;
  margin: -20px -11px 10px -11px;
}
</style>