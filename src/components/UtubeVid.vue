<template>
  <div class="block latestPostBlock">
    <v-container>
      <h2 class="text-center">Guide</h2>

      <v-hover v-slot:default="{ hover }">
        <v-card
          class="rounded-xl text-center"
          color="#80CBC4"
          dark
          max-width="1030"
          max-height="320"
          :elevation="hover ? 12 : 7"
          :class="{ 'on-hover': hover }"
        >
          <div class="d-flex justify-space-between">
            <dev>
              <h1 class="font-weight-bold pa-16" weight="400">
                - What is the Book4Book -
              </h1>
            </dev>
            <dev>
              <iframe
                class="rounded-xl text-right"
                width="560"
                height="320"
                src="https://www.youtube.com/embed/crrZ4scWh0s"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </dev>
          </div>
        </v-card>
      </v-hover>
      <br />
      <v-divider class="pt-9"></v-divider>
      <br />
      <v-hover v-slot:default="{ hover }">
        <v-card
          class="text-center rounded-xl"
          color="#80CBC4"
          dark
          max-width="1030"
          max-height="320"
          :elevation="hover ? 12 : 7"
          :class="{ 'on-hover': hover }"
        >
          <div class="d-flex justify-space-between">
            <dev>
              <iframe
                class="rounded-xl text-left"
                width="560"
                height="320"
                src="https://www.youtube.com/embed/8KCJoSzAF6k"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </dev>
            <dev>
              <h1 class="font-weight-bold py-16" weight="400">
                - Watch here how to register as a member of Book4Book -
              </h1>
            </dev>
          </div></v-card
        >
      </v-hover>
      <br />
      <v-divider class="pt-9"></v-divider>
      <br />
      <v-hover v-slot:default="{ hover }">
        <v-card
          class="text-center rounded-xl"
          color="#80CBC4"
          dark
          max-width="1030"
          max-height="320"
          :elevation="hover ? 12 : 7"
          :class="{ 'on-hover': hover }"
        >
          <div class="d-flex justify-space-between">
            <dev>
              <h1 class="font-weight-bold py-16" weight="400">
                - Watch here how to post a book request in Book4Book -
              </h1>
            </dev>
            <dev>
              <iframe
                class="rounded-xl text-right"
                width="560"
                height="320"
                src="https://www.youtube.com/embed/Sc6QBBu03VY"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </dev>
          </div>
        </v-card>
      </v-hover>
      <br />
      <v-divider class="pt-9"></v-divider>
      <br />
      <v-hover v-slot:default="{ hover }">
        <v-card
          class="text-center rounded-xl"
          color="#80CBC4"
          dark
          max-width="1030"
          max-height="320"
          :elevation="hover ? 12 : 7"
          :class="{ 'on-hover': hover }"
        >
          <div class="d-flex justify-space-between">
            <dev>
              <iframe
                class="rounded-xl text-left"
                width="560"
                height="320"
                src="https://www.youtube.com/embed/luhlMZ3Djp0"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </dev>
            <dev>
              <h1 class="font-weight-bold pa-9" weight="400">
                - Watch here how to donate a book in Book4Book -
              </h1>
            </dev>
          </div>
        </v-card>
      </v-hover>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "UtubeVid",

  data: () => ({
    items: [{}],
  }),
};
</script>