<template>
  <div class="block latestPostBlock">
    <v-container>
      <h2 class="text-center">About Us</h2>
      <v-card :loading="loading" class="mx-auto my-15" max-width="1366" color="#EBF5FB">
             <v-card-text class="pt-0"> 
                   Book4Book is a book exchange platform created by enthusiastic readers,
          tech geeks and nature lovers from Greece subsequently spread over the
          world. The World Summit Award 2013 paved the part for creating the Sri
          Lankan Chapter of Book4Book. Through this platform we aim to support
          the enthusiast readers via technology, within a citizen’s community
          acting without the mediation of third parties. The site is open to
          those who want to share or request books, and also encourages users to
          organize events for mass book exchange.
           </v-card-text>
      </v-card>

      
      <v-row>
        <v-col  v-for="item in items" :key="item.id">
          <v-card :loading="loading" class="mx-auto my-12" max-width="1080" color="#EBF5FB">

            <h2 class="text-center"> Sri Lankan ambassador</h2>
            <v-divider></v-divider>

           <div class="d-flex flex-no-wrap justify-space-between">

                <v-avatar
                class="ma-3"
                size="250"
                tile
                >
                <v-img :src="item.src"></v-img>
                </v-avatar>

                    <dev>
                <h1 class="display-1 font-weight-light">
                  {{item.subtitle}}
                 </h1>
                       
                    </dev>
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
        subtitle: "Anita Desai",
        description: "The novel follows the life of a small family forced to live in poverty. The parents are unable to take care of their four children—the mother is sick ...",
        src: require("../assets/images/10.jpg"),
        color: '#952175',
      },
     
    ]
  }),
};
</script>