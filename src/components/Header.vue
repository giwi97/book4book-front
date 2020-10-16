<template>
  <div style="width:100%;">
    <v-card flat style="width:100%;">
      <v-app-bar dark flat color="#212121">
        <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
        <v-col class="hidden-xs-only">Menu</v-col>
        <v-spacer></v-spacer>
        <v-toolbar-title @click="$router.push('/')" style="cursor:pointer"
          >Book4Book</v-toolbar-title
        >
        <v-spacer></v-spacer>
        <div>
        <v-col align-self="end" class="hidden-xs-only">
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
        </v-col>
        </div>
      </v-app-bar>
      <v-navigation-drawer
      class="px-3 py-2"
        v-model="drawer"
        absolute
        temporary
        height="1200%"
        width="50%"
        disable-resize-watcher
      >
        <v-list nav>
          <v-list-item-group
            v-model="group"
            active-class="deep-blue--text text--accent-4"
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
            <router-link to="/login">
              <v-list-item>
                <h4 style="font-weight:bold;margin-left:10%;">Login/Register</h4>
              </v-list-item>
            </router-link>

            <v-divider></v-divider>
            <router-link to="/">
              <v-list-item>
                <h4 style="font-weight:bold;margin-left:10%;">Home</h4>
              </v-list-item>
            </router-link>
            <v-divider></v-divider>

            <router-link to="/bookrequest">
              <v-list-item>
                <h4 style="font-weight:bold;margin-left:10%;">Book Request</h4>
              </v-list-item>
            </router-link>

            <v-divider></v-divider>

            <router-link to="/bookoffers">
              <v-list-item>
                <h4 style="font-weight:bold;margin-left:10%;">Book Offers</h4>
              </v-list-item>
            </router-link>

            <v-divider></v-divider>
            <router-link to="/AddBook">
              <v-list-item>
                <h4 style="font-weight:bold;margin-left:10%;">Add Book</h4>
              </v-list-item>
            </router-link>

            <v-divider></v-divider>

            <router-link to="/BookCategory">
              <v-list-item>
                <h4 style="font-weight:bold;margin-left:10%;">Categories</h4>
              </v-list-item>
            </router-link>

            <v-divider></v-divider>

            <router-link to="/events">
              <v-list-item>
                <h4 style="font-weight:bold;margin-left:10%;">Events</h4>
              </v-list-item>
            </router-link>

            <v-divider></v-divider>

            <router-link to="/members">
              <v-list-item>
                <h4 style="font-weight:bold;margin-left:10%;">Members</h4>
              </v-list-item>
            </router-link>

            <v-divider></v-divider>

            <router-link to="/groups">
              <v-list-item>
                <h4 style="font-weight:bold;margin-left:10%;">Groups</h4>
              </v-list-item>
            </router-link>

            <v-divider></v-divider>

            <router-link to="/howitworks">
              <v-list-item>
                <h4 style="font-weight:bold;margin-left:10%;">How it works</h4>
              </v-list-item>
            </router-link>

            <v-divider></v-divider>

            <router-link to="/aboutus">
              <v-list-item>
                <h4 style="font-weight:bold;margin-left:10%;">About Us</h4>
              </v-list-item>
            </router-link>

            <v-divider></v-divider>
            <br>
            <br>
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
  watch: {
      group () {
        this.drawer = false
      },
    },
};
</script>
