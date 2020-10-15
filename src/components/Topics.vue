<template>
<v-row >
    <v-col>
  <v-card
    class="mx-auto"
    max-width="344"
    outlined
    color="yellow lighten-3"
    shaped
    elevation="8"
  >
    <v-list-item three-line>
      <v-list-item-content>
        <v-list-item-title class="headline mb-1">
          eBook Readers
        </v-list-item-title>
        <v-list-item-subtitle>Members Only</v-list-item-subtitle>
      </v-list-item-content>

     
    </v-list-item>

    <v-card-actions>
       <v-row align="end" justify-md="end">
      <v-btn
        outlined
        rounded
        text 
              
      >
        <router-link to="/ebookgroup">
        View
       </router-link>
      </v-btn>
       </v-row>
    </v-card-actions>
  </v-card>
<br>
<br>
   <v-card
    class="mx-auto"
    max-width="344"
    outlined
    color="pink lighten-4"
    shaped
    elevation="8"
  >
    <v-list-item three-line>
      <v-list-item-content>
        <v-list-item-title class="headline mb-1">
          Money Saving Tips
        </v-list-item-title>
        <v-list-item-subtitle>For All visitors</v-list-item-subtitle>
      </v-list-item-content>

     
    </v-list-item>

    <v-card-actions>
      <v-row align="end" justify-md="end">
      <v-btn
        outlined
        rounded
        text

      >
        View
      </v-btn>
      </v-row>
    </v-card-actions>
  </v-card>
    </v-col>
    <v-col>
  <v-card
    class="mx-auto"
    max-width="344"
    outlined
    color="deep-purple lighten-3"
    shaped
    elevation="8"
  >
    <v-list-item three-line>
      <v-list-item-content>
        <v-list-item-title class="headline mb-1">
          Teachers Corner
        </v-list-item-title>
        <v-list-item-subtitle>Members Only</v-list-item-subtitle>
      </v-list-item-content>

    </v-list-item>

    <v-card-actions>
      <v-row align="end" justify-md="end">
      <v-btn
        outlined
        rounded
        text
      >
        View
      </v-btn>
      </v-row>
    </v-card-actions>
  </v-card>

<br>
<br>
   <v-card
    class="mx-auto"
    max-width="344"
    outlined
    color="light-blue lighten-3"
    shaped
    elevation="8"
  >
    <v-list-item three-line>
      <v-list-item-content>
        <v-list-item-title class="headline mb-1">
          The Writers' Forum
        </v-list-item-title>
        <v-list-item-subtitle>Members Only</v-list-item-subtitle>
      </v-list-item-content>

    </v-list-item>

    <v-card-actions>
      <v-row align="end" justify-md="end">
      <v-btn
        outlined
        rounded
        text
      >
       <router-link to="/ebookgroup">
        View
       </router-link>
      </v-btn>
      </v-row>
    </v-card-actions>
  </v-card>
    

    </v-col>

     <v-col>
  <v-card
    class="mx-auto"
    max-width="344"
    outlined
    color="teal lighten-3"
    shaped
    elevation="8"
  >
    <v-list-item three-line>
      <v-list-item-content>
        <v-list-item-title class="headline mb-1">
         Members' Thoughts
        </v-list-item-title>
        <v-list-item-subtitle>Members Only</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-card-actions>
      <v-row align="end" justify-md="end">
      <v-btn
        outlined
        rounded
        text
        >
        View
      </v-btn>
      </v-row>
    </v-card-actions>
  </v-card>
    

    </v-col>

</v-row>


</template>

<script>
  export default {}
</script>