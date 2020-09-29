<template>
  <v-container>
    <div class="heroBlock">
      <v-carousel>
        <v-carousel-item
          v-for="(item, i) in items"
          :key="i"
          :src="item.src"
          reverse-transition="fade-transition"
          transition="fade-transition"
        ></v-carousel-item>
      </v-carousel>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "Hero",

  data: () => ({}),
};
</script>
