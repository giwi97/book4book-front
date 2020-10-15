<template>
  <v-content>
    <div class="block latestPostBlock">
    <h2 class="text-center">Feedback</h2>
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
     <div class="block latestPostBlock">
    <h2 class="text-center">Add your Review</h2>
     </div>
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


