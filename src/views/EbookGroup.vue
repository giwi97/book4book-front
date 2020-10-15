<template>
  <v-main>
    <h1>Group - eBook Readers</h1>
    <br />
    <v-spacer></v-spacer>
    

    <AddPost />
    <br>
    <GroupPost />

    <br />

    <template>
      <div class="text-center">
        <v-pagination
          v-model="page"
          :length="4"
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
