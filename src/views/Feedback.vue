<template>
  <v-content>
    <div class="staticHero">
      <v-img max-height="150" src="../assets/images/ggg.jpg">
        <v-row align="end" class="lightbox white--text pa-2 fill-height">
          <v-col>
            <v-container>
              <div class="headline">Feedback</div>
            </v-container>
          </v-col>
        </v-row>
      </v-img>
    </div>
    <br>
    <h5 class="text-center"> Give us your feedback or our Website</h5>
    
    <p class="text-center">Please fill out this feedback form. Your feedback help us to give best quality experience to all of our members.</p> 
    <br>
    <br>  
      <Survey />
    <br>
    <br>
    <br>
     
    <br>
      <Rate />
    <br> 
   
  </v-content>
</template>

<script>
import Survey from "../components/Survey";
import Rate from "../components/Rate";
export default {
  name: "Feedback",

  components: {
    Survey,
    Rate,
  },


  data() {
    return {
      items: [
        
      ],
    };
  },
};
</script>


