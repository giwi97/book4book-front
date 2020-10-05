<template>
    <v-card class="mx-auto" max-width="500" >
    <v-card-title class="title font-weight-regular justify-space-between">
      <span>{{ currentTitle }}</span>
      <v-avatar
        color="primary lighten-2"
        class="subheading white--text"
        size="24"
        v-text="step"
      ></v-avatar>
    </v-card-title>

    <v-window v-model="step">
      <v-window-item :value="1">
        <v-card-text>
          
              <v-radio-group v-model="row" row>
                  <v-radio label="Yes" value="radio-1">
                  </v-radio>
                  <v-radio label="No" value="radio-2">
                  </v-radio>
              </v-radio-group>
        
         
        </v-card-text>
      </v-window-item>

      <v-window-item :value="2">
        <v-card-text>
              <v-row> 
                <v-col>     
             <v-checkbox
              v-model="ex4"
              label="Donate Books"
              color="success"
              value="Donate Books"
              hide-details
            ></v-checkbox>
            <v-checkbox
              v-model="ex4"
              label="Request Books"
              color="success"
              value="Request Books"
              hide-details
            ></v-checkbox>
            <v-checkbox
              v-model="ex4"
              label="Other"
              color="success"
              value="Other"
              hide-details
            ></v-checkbox>

            <v-text-field></v-text-field>

                </v-col>
              </v-row>
       
       
        </v-card-text>
      </v-window-item>

        <v-window-item :value="3">
        <v-card-text>
            
              <v-radio-group v-model="col" column>
                  <v-radio label="Easy" value="radio-1">
                  </v-radio>
                  <v-radio label="Average" value="radio-2">
                  </v-radio>
                  <v-radio label="Difficult" value="radio-3">
                  </v-radio>
                  <v-radio label="Very Difficult" value="radio-4">
                  </v-radio>
              </v-radio-group>
               
           <v-btn
             class="ma-2"
              :loading="loading2"
             :disabled="loading2"
             color="success"
             @click="loader = 'loading2'"
             >
            SUBMIT
           
            </v-btn>
       
        </v-card-text>
      </v-window-item>
    </v-window>

    <v-divider></v-divider>

    <v-card-actions>
      <v-btn
        :disabled="step === 1"
        text
        @click="step--"
      >
        Back
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn
        :disabled="step === 3"
        color="primary"
        depressed
        @click="step++"
      >
        Next
      </v-btn>
    </v-card-actions>
  </v-card>
</template>>

<script>
  export default {
    data: () => ({
      step: 1,
    }),

    computed: {
      currentTitle () {
        switch (this.step) {
          case 1: return 'Is this your first visit for the website?'
          case 2: return 'What is the primary reason for visit this website?'
          default: return 'How is it to find books on the website?'
        }
      },
    },
  }
</script>