
 <template>
  <v-row justify="center">
      <v-col>
    <v-expansion-panels accordion  class="pa-md-6 mx-lg-auto">
      <v-expansion-panel>
        <v-expansion-panel-header class="subtitle-1 font-weight-bold">1. Having trouble with registering</v-expansion-panel-header>
        <v-expansion-panel-content class="body-1">
         <router-link to="/"><p class="text-decoration-underline">- How to register at book4book</p></router-link>
        </v-expansion-panel-content>
      </v-expansion-panel>
    
 
      <v-expansion-panel>
        <v-expansion-panel-header class="subtitle-1 font-weight-bold">2. Having trouble when loggin into my account</v-expansion-panel-header>
        <v-expansion-panel-content class="body-1">
          <div>
         <router-link to="/"><p class="text-decoration-underline">- If you are having problems logging into book4book.lk </p></router-link>
         <router-link to="/"><p class="text-decoration-underline">- If you can't logout from your account</p></router-link>
          </div>
        </v-expansion-panel-content>
      </v-expansion-panel>
    
  
      <v-expansion-panel>
        <v-expansion-panel-header class="subtitle-1 font-weight-bold">3. Having difficulty donate a book</v-expansion-panel-header>
        <v-expansion-panel-content class="body-1">
          <div>
         <router-link to="/"><p class="text-decoration-underline">- How to donate a Book</p></router-link>
         <router-link to="/"><p class="text-decoration-underline">- How do I Donate without an ISBN?</p></router-link>
          </div>
        </v-expansion-panel-content>
      </v-expansion-panel>
      
  
      <v-expansion-panel>
        <v-expansion-panel-header class="subtitle-1 font-weight-bold">4. Having difficulty to find members</v-expansion-panel-header>
        <v-expansion-panel-content class="body-1">
          <div>
         <router-link to="/"><p class="text-decoration-underline">- How to donate a Book</p></router-link>

          </div>
        </v-expansion-panel-content>
      </v-expansion-panel>

      
  
      <v-expansion-panel>
        <v-expansion-panel-header class="subtitle-1 font-weight-bold">5. Having difficulty request a book</v-expansion-panel-header>
        <v-expansion-panel-content class="body-1">
          <div>
         <router-link to="/"><p class="text-decoration-underline">- How to request a Book</p></router-link>
         <router-link to="/"><p class="text-decoration-underline">- How do I request without an ISBN?</p></router-link>
          </div>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
      </v-col>
      <v-col>
          <v-row justify="center">
          <p class="headline font-weight-bold">Quick Help</p>
          </v-row>
           <div class="text-center">
          <router-link to="/"><p class="text-decoration-underline">I just joined! Where do I start?</p></router-link>
          <router-link to="/"><p class="text-decoration-underline">How can I change my email address?</p></router-link>
          <router-link to="/"><p class="text-decoration-underline">How do I cancel a request?</p></router-link>
          <router-link to="/"><p class="text-decoration-underline">How do I contact another member?</p></router-link>
          <router-link to="/"><p class="text-decoration-underline">How do I add a book to my wish list?</p></router-link>
           </div>
      </v-col>
  </v-row>
  
</template>
