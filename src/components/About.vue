<template>
  <div class="block latestPostBlock">
    <v-container>
      <h2 class="text-center">About Us</h2>
       <v-card class="mx-auto rounded-xl" color="#3b453f" dark max-width="1050">
        <p class="text-center ma-6">
                   Book4Book is a book exchange platform created by enthusiastic readers,
          tech geeks and nature lovers from Greece subsequently spread over the
          world. The World Summit Award 2013 paved the part for creating the Sri
          Lankan Chapter of Book4Book. Through this platform we aim to support
          the enthusiast readers via technology, within a citizen’s community
          acting without the mediation of third parties. The site is open to
          those who want to share or request books, and also encourages users to
          organize events for mass book exchange.
           </p>
           
      </v-card>

    <br>
    <v-divider size ="200"></v-divider>
    <br>
      
      <v-row>
        <v-col  v-for="item in items" :key="item.id">
          <v-card  class="mx-auto rounded-xl" max-width="1050" color="#EBF5FB">

            <h2 class="text-center font-weight-bold"> Sri Lankan ambassador</h2>
            <v-divider></v-divider>

           <div class="d-flex">
             <dev>
                <v-avatar
                class="mt-7 ml-3 rounded-xl"
                size="250"
                tile
                >
                <v-img :src="item.src"></v-img>
                </v-avatar>
             </dev>

                <dev>
                <h4 class="font-weight-bold text-center ml-5 mt-1">- Giwantha pitawala -</h4>
                <p class="text-center mx-6">Giwantha pitawala is ICT for development enthusiast and a researcher. He likes music and plays guitar and Sitar. He initiated the Book4Book Sri Lanka chapter with Kassie parallel to the World Summit Award 2013.</p>
                <p class="font-italic text-center font-weight-black">“Books are the quietest and most constant of friends; they are the most accessible and wisest of counselors, and the most patient of teachers.”</p>
                  
                <h5 class="font-weight-bold text-right">  – Charles W. Eliot</h5>

                <v-icon size="24px" >
                mdi-facebook 
                
                </v-icon>
                <v-card-text>- Giwantha pitawala</v-card-text> 
                <v-icon size="24px" >
                   mdi-linkedin 
                   
                </v-icon>
                <v-card-text>- GiwiPitz</v-card-text> 
                <v-icon size="24px">
                   mdi-dialpad 
                   
                </v-icon>
                <v-card-text>- 071-6786786</v-card-text> 
                <v-icon size="24px">
                  mdi-email 
                  
                </v-icon>
                <v-card-text>- Pitawalagiwi@gmail.com</v-card-text>
                
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
       src: require("../assets/images/10.jpg"),
        color: '#952175',
      },
     
    ],
    icons: ["mdi-facebook","mdi-linkedin","mdi-dialpad","mdi-email"]
  }),
};
</script>