<template>
  <div style="width:100%;">
    <v-card flat>
      <v-app-bar flat color="white">
        <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
        Menu

        <v-spacer></v-spacer>
        <v-toolbar-title @click="$router.push('/')" style="cursor:pointer">Book4Book</v-toolbar-title>
        <v-spacer></v-spacer>
        <div>
          <v-btn depressed x-large style="font-size: 10px;font-weight: bold;">
            Register / Login
          </v-btn>
          <v-btn color="#26C6DA" dark x-large style="font-size: 10px;font-weight: bold;">
            Explore <br />
            Categories
          </v-btn>
        </div>
      </v-app-bar>

      <v-navigation-drawer v-model="drawer" absolute temporary>
        <v-list nav>
          <v-list-item-group
            v-model="group"
            active-class="deep-purple--text text--accent-4"
          >
            <v-list-item>
              <router-link to="/">
              <v-list-item-title>Home</v-list-item-title>
              </router-link>
            </v-list-item>

            <v-list-item>
              <router-link to="/bookrequest">
              <v-list-item-title>Book Request</v-list-item-title>
              </router-link>
            </v-list-item>
            <v-list-item>
             <router-link to="/bookoffers">
              <v-list-item-title>Book Offers</v-list-item-title>
              </router-link>
            </v-list-item>
            <v-list-item>
              <router-link to="/events">
              <v-list-item-title>Events</v-list-item-title>
              </router-link>
            </v-list-item>
            <v-list-item>
              <router-link to="/members">
              <v-list-item-title>Members</v-list-item-title>
              </router-link>
            </v-list-item>
            <v-list-item>
              <router-link to="/groups">
              <v-list-item-title>Groups</v-list-item-title>
              </router-link>
            </v-list-item>
            <v-list-item>
              <router-link to="/howitworks">
              <v-list-item-title>How it works</v-list-item-title>
              </router-link>
            </v-list-item>
            <v-list-item>
              <router-link to="/aboutus">
              <v-list-item-title>About Us</v-list-item-title>
              </router-link>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "Header",

  data: () => ({ drawer: false, group: null }),
};
</script>
