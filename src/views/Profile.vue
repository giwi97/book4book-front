@@ -0,0 +1,122 @@
<template>
  <v-content>
      <v-container class="fill-height" fluid 
     style="height: 1230px">

         <v-row  justify="center"> 
        <v-col
      cols="12"
      sm="10">   

   <v-card
   class="mx-auto"
    color="#651FFF"
    dark
    max-height="1300"
    max-width="1000"
    tile>
  <v-card-title class="headline font-weight-bold blue-grey hite--text">
      PROFILE
    </v-card-title>

    <v-img
      height="310"
      src="https://storage.googleapis.com/proudcity/deleontx/uploads/2016/12/preview-wattpad-cover-maker-thumbnail.jpg"
    >
     <v-col
        md="20"
        offset-md="1">
          <v-avatar
            class="profile"
            color="grey"
             rounded
            size="200"
            tile >
            <v-img src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"></v-img>
          </v-avatar>
          <v-list-item
            color="rgba(100, 0, 50, .4)"
            dark >
            <v-list-item-content>
              <v-list-item-title class="title">
                <h1> Marcus Obrien </h1>
              </v-list-item-title>
              <v-list-item-subtitle><h2> Australia</h2></v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          </v-col>
       
        </v-img>
         <v-divider
      class="mx-4"
      vertical
    ></v-divider>
   <v-col
        md="10"
        offset-md="1">

     
           <v-text-field
            value="Marcus Obrien"
            label="Full Name"
            outlined></v-text-field>
            <v-text-field
            value="1998/11/28"
            label="Birth Date"
            outlined></v-text-field>
             <v-text-field
            value="Marcus.O@gmail.com"
            label="Birth Date"
            outlined></v-text-field>
             <v-text-field
            value="077420018"
            label="Telephone No"
            outlined></v-text-field>
            <v-text-field
            value="Australia"
            label="Country"
            outlined></v-text-field>
             <v-text-field
            value="160/2,1st Lane, Australia."
            label="Address"
            outlined></v-text-field>
           
           
   </v-col>
       <v-divider
      class="mx-4"
      vertical
    ></v-divider>
<v-col
        md="8"
        offset-md="5">
    <v-btn
      color="warning"
      class="mr-4"
      @click="validate"
       router-link to="/TimeL"  >
      Timeline
    </v-btn>
</v-col>   

  </v-card>
        </v-col>
    </v-row>
  </v-container>
</v-content>
</template>


<script>


  
</script>