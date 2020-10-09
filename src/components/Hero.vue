<template>
  <div class="heroBlock">
    <v-carousel hide-delimiters cycle height="700">
      <v-carousel-item
        v-for="(item, i) in items"
        :key="i"
        :src="item.src"
        reverse-transition="fade-transition"
        transition="fade-transition"
      >
        <v-row class="fill-height title" align="center" justify="center">
          <div>{{ item.title }}</div>
        </v-row>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
export default {
  name: "Hero",

  data() {
    return {
      items: [
        {
          src: require("../assets/images/1.jpg"),
          title: "Getting ready to read again",
        },
        {
          src: require("../assets/images/2.jpg"),
          title: "The books helping children to get back learning",
        },
        {
          src: require("../assets/images/33.jpg"),
          title: "Join with us",
        },
        {
          src: require("../assets/images/4.jpg"),
          title: "Using books to get back to learning",
        },
      ],
    };
  },
};
</script>
