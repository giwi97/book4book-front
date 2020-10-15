<template>
  <v-container
    fluid
    style="height: 800px"
  >
         <v-row  justify="center"> 
        <v-col
      cols="12"
      sm="10"
      md="8"
      lg="6"
    >      
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
  
  <v-col
        md="10"
        offset-md="4">
     <v-avatar
            class="profile"
            color="grey"
            size="200"
            justify="center"
            tile>
            <v-img src="https://gravatar.com/avatar/3633033d6c0fe4faee0709eaeed37d43?s=800&d=robohash&r=x"></v-img>
            
          </v-avatar>                   
     
  </v-col>

  <v-col
        md="10"
        offset-md="4"
        justify="center">

<v-list-item-content>
              <v-list-item-title class="title">
                Marcus Obrien
              </v-list-item-title>
              <v-list-item-subtitle>Network Engineer</v-list-item-subtitle>
            </v-list-item-content>
         
  </v-col>
   
  <v-divider
      class="mx-4"
      vertical
    ></v-divider>

      <v-text-field
         dense
       ></v-text-field>

      <v-text-field
        dense            
      ></v-text-field>

      <v-text-field
        dense         
      ></v-text-field>

      <v-text-field
        dense            
      ></v-text-field>

      <v-text-field
        dense            
      ></v-text-field>

      <v-text-field
        dense         
      ></v-text-field>

      <v-text-field
        dense            
      ></v-text-field>
        

<v-divider
      class="mx-4"
      vertical
    ></v-divider>

     <v-col
        md="10"
        offset-md="2">
    <v-btn
      depressed
      color="primary"
      router-link to="/Editpro"
    >
    <v-icon left>
        mdi-pencil
      </v-icon>
      Edit Profile
    </v-btn>

    <v-divider
      class="mx-3"
      vertical
    ></v-divider>

    <v-btn
      color="warning"
      router-link to=""
      >Contribution</v-btn>
     </v-col>
  </v-form>
        </v-col>
    </v-row>
  </v-container>
</template>


<script>


  
</script>