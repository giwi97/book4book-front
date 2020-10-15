<template>
  <v-content>
    <div class="block latestPostBlock">
    <h2 class="text-center">Groups</h2>
    
    <br>
    <p class="text-center"> These groups are provided to allow you you to exchange thoughts, ideas and opinions on topics that are of interest to you. Please do not use the group discussions boards to promote other commercial websites. This is a friendly site! Let's keep it that way.</p>

    <Topics />
    </div>
  </v-content>
</template>

<script>
import Topics from "../components/Topics";
export default {
  name: "Groups",

   components: {
    Topics,
  
  },

  data() {
    return {
      items: [
        
      ],
    };
  },
};
</script>
