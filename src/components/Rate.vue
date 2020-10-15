<template>
  <v-card
    class="mx-auto elevation-6"
    color="white"
    dark
    style="max-width: 1275px;"
  >
    <v-row justify="space-between">
      <v-col cols="12"
        sm="6">
        <v-card-title>
          <div>
            <div class="black--text headline">
              Rate
            </div>
            
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
        size="28"
      ></v-rating>
      <span class="black--text text--lighten-2 caption mr-2">
        ({{ rating }})
      </span>
    </v-card-actions>
      </v-col>
      <v-col cols="12"
        sm="6">
            <v-textarea
      background-color="grey lighten-5"
      color="black"
      label="Add Additional comment"
    ></v-textarea>
    <br>
    <v-btn
      class="ma-2"
      :loading="loading2"
      :disabled="loading2"
      color="success"
      @click="loader = 'loading2'"
    >
      SUBMIT
      <template v-slot:loader>
        <span>Loading...</span>
      </template>
    </v-btn>
      </v-col>
     
    </v-row>
    
    
  </v-card>
</template>

<script>
  export default {
    data: () => ({
      rating: 1,
    }),
  }
</script>