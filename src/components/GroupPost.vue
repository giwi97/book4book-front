<template>
  <v-container>
    <v-card class="mx-auto" max-width="1250">
      <v-card-text>
        <div class="text-right">02/10/2020</div>
        <p class="subtitle-1 font-weight-bold text--primary">Harry</p>
        <p class="subtitle-2 font-weight-bold">Subject : Introduction</p>
        <p class="subtitle-2 font-weight-bold">Description :</p>
        <div class="text--primary">Hello Everyone!</div>
      </v-card-text>
      <v-card-actions>
        <v-btn text color="deep-purple accent-4" 
         @click="show = !show"> Comments <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon> </v-btn>
         
      </v-card-actions>

      <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
        </v-card-text>
      </div>
    </v-expand-transition>
      
    </v-card>

    <br />

    <v-card class="mx-auto" max-width="1250">
      <v-card-text>
        <div class="text-right">02/10/2020</div>

        <p class="subtitle-1 font-weight-bold text--primary">Harry</p>
        <p class="subtitle-2 font-weight-bold">Subject : Introduction</p>
        <p class="subtitle-2 font-weight-bold">Description :</p>
        <div class="text--primary">Hello Everyone!</div>
      </v-card-text>
      
      <v-card-actions>
        <v-btn text color="deep-purple accent-4" 
         @click="show = !show"> Comments <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon> </v-btn>
        
      </v-card-actions>
       <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
        </v-card-text>
      </div>
    </v-expand-transition>
     
    </v-card>
  </v-container>
  
</template>



<script>
  export default {
    data: () => ({
      show: false,
    }),
  }
</script>



