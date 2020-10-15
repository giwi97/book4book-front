<template>
  <v-main>
    <div class="block latestPostBlock">
    <h2 class="text-center">Groups - eBook Readers</h2>
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
