<template>
  <div class="navi-bar" style="background-image: linear-gradient(to right, #C04848, #480048);">
    <v-container>
      <v-row >
        <v-col cols="12" class="py-2">
          <v-btn-toggle v-model="text" tile color="white accent-3" group>
            <v-btn to="/">
              <span style="color:#FFB300;">Home</span>
            </v-btn>

            <v-btn to="/bookrequest">
             <span style="color:#FFB300;"> Book Request</span>
            </v-btn>

            <v-btn to="/bookoffers">
              <span style="color:#FFB300;">Book Offers</span>
            </v-btn>

            <v-btn to="/events">
             <span style="color:#FFB300;"> Events</span>
            </v-btn>

            <v-btn to="/members">
             <span style="color:#FFB300;"> Members</span>
            </v-btn>

            <v-btn to="/groups">
             <span style="color:#FFB300;"> Groups</span>
            </v-btn>

            <v-btn to="/howitworks">
              <span style="color:#FFB300;">How it works</span>
            </v-btn>

            <v-btn to="/aboutus">
             <span style="color:#FFB300;"> About Us</span>
            </v-btn>
          </v-btn-toggle>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "HeaderS",

  data: () => ({}),
};
</script>
