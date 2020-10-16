<template >
  <div >
    <v-container>
      <v-card class="mx-auto rounded-xl" max-width="100%" :elevation="15">
        <h5 class="text-center ma-6 teal--text font-bold">
          Book4Book is a book exchange platform created by enthusiastic readers,
          tech geeks and nature lovers from Greece subsequently spread over the
          world. The World Summit Award 2013 paved the part for creating the Sri
          Lankan Chapter of Book4Book. Through this platform we aim to support
          the enthusiast readers via technology, within a citizen’s community
          acting without the mediation of third parties. The site is open to
          those who want to share or request books, and also encourages users to
          organize events for mass book exchange.
        </h5>
      </v-card>

      <br />
      <v-divider size="200"></v-divider>
      <br />

      <v-row>
        <v-col v-for="item in items" :key="item.id">
          <v-card
            dark
            class="mx-auto rounded-xl text-center"
            max-width="100%"
            style=" background-image: linear-gradient( 345deg, #1dcce0, teal);"
            :elevation="15"
          >
            <h2 class="text-center font-weight-bold">Sri Lankan ambassador
            </h2> 
            <v-divider></v-divider>

            <div >
                  <h4 class="font-weight-bold text-center ml-5 mt-1">
                    - Giwantha pitawala -
                  </h4>
                  <p class="text-center mx-6">
                    Giwantha pitawala is ICT for development enthusiast and a
                    researcher. He likes music and plays guitar and Sitar. He
                    initiated the Book4Book Sri Lanka chapter with Kassie
                    parallel to the World Summit Award 2013.
                  </p>
                  <p class="font-italic text-center font-weight-black">
                    “Books are the quietest and most constant of friends; they
                    are the most accessible and wisest of counselors, and the
                    most patient of teachers.”
                  </p>

                  <h5 class="font-weight-bold text-right">
                    – Charles W. Eliot
                  </h5>
                  <v-card-text>
                    <div class="d-flex justify-space-between">
                      <div>
                        <v-icon size="25px" class="ml-6"> mdi-facebook </v-icon
                        >- Giwantha pitawala
                      </div>
                      <div>
                        <v-icon size="25px" class="ml-6"> mdi-linkedin </v-icon
                        >- GiwiPitz
                      </div>
                      <div>
                        <v-icon size="25px" class="ml-6"> mdi-dialpad </v-icon>-
                        071-6786786
                      </div>
                      <div>
                        <v-icon size="25px" class="ml-6"> mdi-email </v-icon>-
                        Pitawalagiwi@gmail.com
                      </div>
                    </div></v-card-text>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "About",

  data: () => ({
    items: [
      {
        id: 1,
        src: require("../assets/images/nish.jpg"),
        color: "#952175",
      },
    ],
  }),
};
</script>