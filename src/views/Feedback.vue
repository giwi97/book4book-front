<template>
  <v-content>
    <h1>Feedback</h1>
    <br>
    <h5> Give us your feedback or our Website</h5>
    <br>
    <p>Please fill out this feedback form. Your feedback help us to give best quality experience to all of our members.</p> 
      <Survey />
    <br>
    <h1>Add your Review</h1>
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


