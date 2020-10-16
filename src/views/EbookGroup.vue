<template>
  <v-main>
    <div class="staticHero">
      <v-img max-height="150" src="../assets/images/ggg.jpg">
        <v-row align="end" class="lightbox white--text pa-2 fill-height">
          <v-col>
            <v-container>
              <div class="headline">Groups - eBook Readers</div>
            </v-container>
          </v-col>
        </v-row>
      </v-img>
    </div>
    
      
    <GroupPost />
    
    <AddPost />
    <br>

    <template>
      <div class="text-center">
        <v-pagination
          v-model="page"
          :length="1"
          prev-icon="mdi-menu-left"
          next-icon="mdi-menu-right"
        ></v-pagination>
      </div>
    </template>
  </v-main>
</template>

<script>
import GroupPost from "../components/GroupPost";
import AddPost from "../components/AddPost";
export default {
  name: "EbookGroup",
  
  components: {
    GroupPost,
    AddPost,
  },

  data() {
    return {
      page: 1,
    };
  },
};
</script>
