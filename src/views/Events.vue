<template>
<v-content>
  <Eventup />
  <Calender />
</v-content>
</template>

<script>
import Eventup from "../components/Eventup";
import Calender from "../components/Calender";

export default {
  name: "Events",

  components: {
    Eventup,
    Calender,
  },


  data() {
    return {
      items: [
       
      ],
    };
  },
};
</script>
