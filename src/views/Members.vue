<template>
  <v-content>
    <MembersP />
  </v-content>
</template>

<script>
import MembersP from '../components/MembersP'

export default {
  name: "Members",
  components: {
    MembersP,
  },

  data() {
    return {
      items: [
      
      ],
    };
  },
};
</script>
