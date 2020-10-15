<template>
  <div style="width:100%;">
    <v-card flat style="width:100%;">
      <v-app-bar dark flat color="#212121">
        <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
        Menu
        <v-spacer></v-spacer>
        <v-toolbar-title @click="$router.push('/')" style="cursor:pointer"
          >Book4Book</v-toolbar-title
        >
        <v-spacer></v-spacer>
        <div>
          <v-btn
            rounded
            outlined
            depressed
            style="font-size: 10px;font-weight: bold;"
            to="/Login"
          >
            Register / Login
          </v-btn>
          <v-btn
            rounded
            outlined
            color="#26C6DA"
            dark
            style="font-size: 10px;font-weight: bold;margin-left:5px;"
            to="/BookCategory"
          >
            Categories
          </v-btn>
        </div>
      </v-app-bar>
      <v-navigation-drawer v-model="drawer" absolute temporary height="800">

        <v-list nav>
          <v-list-item-group
            v-model="group"
            active-class="deep-purple--text text--accent-4"
          >
            <!-- <v-form>
          <v-col
          cols="12"
          sm="6"
          md="4"
        > -->

            <v-text-field
              label="Search"
              filled
              rounded
              append-icon="mdi-magnify"
            ></v-text-field>

            <!-- </v-col> -->
            <!-- </v-form> -->
            <br />
            <v-divider></v-divider>
            <router-link to="/">
              <v-list-item>
                <h4 style="font-weight:bold;">Home</h4>
              </v-list-item>
            </router-link>
            <v-divider></v-divider>

            <router-link to="/bookrequest">
              <v-list-item>
                <h4 style="font-weight:bold;">Book Request</h4>
              </v-list-item>
            </router-link>

            <v-divider></v-divider>

            <router-link to="/bookoffers">
              <v-list-item>
                <h4 style="font-weight:bold;">Book Offers</h4>
              </v-list-item>
            </router-link>

            <v-divider></v-divider>

            <router-link to="/events">
              <v-list-item>
                <h4 style="font-weight:bold;">Events</h4>
              </v-list-item>
            </router-link>

            <v-divider></v-divider>

            <router-link to="/members">
              <v-list-item>
                <h4 style="font-weight:bold;">Members</h4>
              </v-list-item>
            </router-link>

            <v-divider></v-divider>

            <router-link to="/groups">
              <v-list-item>
                <h4 style="font-weight:bold;">Groups</h4>
              </v-list-item>
            </router-link>

            <v-divider></v-divider>

            <router-link to="/howitworks">
              <v-list-item>
                <h4 style="font-weight:bold;">How it works</h4>
              </v-list-item>
            </router-link>

            <v-divider></v-divider>

            <router-link to="/aboutus">
              <v-list-item>
                <h4 style="font-weight:bold;">About Us</h4>
              </v-list-item>
            </router-link>

            <v-divider></v-divider>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "Header",
  data: () => ({ drawer: null, group: null }),
};
</script>