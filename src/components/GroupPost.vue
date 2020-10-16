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
         
        </v-row>
        <p class="subtitle-2 font-weight-bold">Subject : Introduction</p>
        <p class="subtitle-2 font-weight-bold">Description :</p>
        <div class="text--primary">Hello Everyone!</div>
      </v-card-text>
      <div>
        <v-btn class="ma-2" text icon color="blue lighten-2">
          <v-icon>mdi-thumb-up</v-icon>
        </v-btn>

        <v-btn class="ma-2" text icon color="red lighten-2">
          <v-icon>mdi-thumb-down</v-icon>
        </v-btn>
      </div>
    </v-card>

  </v-container>
</template>



<script>
export default {};
</script>



