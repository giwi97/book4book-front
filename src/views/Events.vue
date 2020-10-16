<template>
<v-content>
  <div class="staticHero">
      <v-img max-height="150" src="../assets/images/ggg.jpg">
        <v-row align="end" class="lightbox white--text pa-2 fill-height">
          <v-col>
            <v-container>
              <h1 style="font-size:40px;" class="text-center font-weight-regular">Events</h1>
            </v-container>
          </v-col>
        </v-row>
      </v-img>
    </div>
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
