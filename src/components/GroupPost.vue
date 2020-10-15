<template>

  <v-container>
   
      
    <v-card class="mx-auto pink lighten-5" max-width="1250">
     
      <v-card-text>
        <v-row>
         <v-list-item-avatar color="grey darken-3">
          <v-img
            class="elevation-6"
            alt=""
            src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
          ></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>Evan You</v-list-item-title>
        </v-list-item-content>
        <div class="text-right">02/10/2020</div>
        </v-row>
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

        <v-text-field
            label="Reply"
            filled
            rounded
            dense
          ></v-text-field>
      </div>
    </v-expand-transition>
      
    </v-card>

    <br />

    <v-card class="mx-auto pink lighten-5" max-width="1250">
      <v-card-text>
        <v-row>
         <v-list-item-avatar color="grey darken-3">
          <span class="white--text headline">CJ</span>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>Christ J</v-list-item-title>
        </v-list-item-content>
        <div class="text-right">02/10/2020</div>
        
        </v-row>

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



