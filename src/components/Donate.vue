<template>
  <div class="block latestPostBlock" style="opacity:20;" >
    <b-container fluid >
      <h2 class="text-center">Donate a Book</h2>
       <v-form ref="form"  v-model="valid" lazy-validation>
      <b-card style="max-width: 80%; background-color:#ECEFF1;" class="text-center rounded-xl" border-variant="info" >
      
         <b-form-radio-group class="text-center" v-model="btype" >
          <b-form-radio  value="true">E-Books</b-form-radio>
          <b-form-radio  value="false">Books</b-form-radio>
         </b-form-radio-group>

         <b-row class="my-1">
          <b-col sm="2">
            <label class="font-weight-bold" for="input-valid">Language :</label>
          </b-col>
          <b-col sm="4">
            <b-form-select
              id="input-3"
              v-model="selected"
              :options="language"
              value-field="item"
              text-field="name"
              required
            ></b-form-select>
          </b-col>
        </b-row>

<v-divider></v-divider>

        <b-row class="my-1">
          <b-col sm="2">
            <label class="font-weight-bold" for="input-title">Book Title:</label>
          </b-col>
          <b-col sm="9">
            <b-form-input
            required
            v-model="title"
              id="input-title"
              placeholder="Enter title"
            ></b-form-input>
            Enter your title as it will appear on the book cover.
          </b-col>
        </b-row>

          <v-divider></v-divider>

         <b-row class="my-1">
          <b-col sm="2">
            <label class="font-weight-bold" for="input-invalid">Book Author name :</label>
            
          </b-col>
          <b-col sm="4">
            <b-form-input v-model="authr" required id="input-invalid" :state="null" ></b-form-input>
          </b-col>
         
        </b-row>

<v-divider></v-divider>
       
        <b-row class="my-1">
          <b-col sm="2">
            <label class="font-weight-bold" for="input-series">Series:</label>
          </b-col>
          <b-col sm="4">
            <b-form-input
              id="series-Name"
              v-model="Sname"
              required
              :state="null"
              placeholder="Series Name"
            ></b-form-input>
          </b-col>
          <b-col sm="4">
            <b-form-input
              id="series-no"
              v-model="Sno"
              required
              :state="null"
              placeholder="Series Number"
            ></b-form-input>
          </b-col>
        </b-row>

          <v-divider></v-divider>

         <b-row class="my-1">
          <b-col sm="2">
            <label class="font-weight-bold" for="input-invalid">Description:</label>
            (Opional)
          </b-col>
          <b-col sm="9">
            <b-textarea v-model="Description" required name="message" rows="3"></b-textarea>
          </b-col>
        </b-row>

        <v-divider></v-divider>

         <b-row class="my-1">
          <b-col sm="2">
            <label class="font-weight-bold" for="auther">Reciever's Name:</label>
          </b-col>
          <b-col sm="4">
            <b-form-input
              id="reciverf"
              v-model="rfname"
              :state="null"
              placeholder="First Name"
            ></b-form-input>
          </b-col>
          <b-col sm="4">
            <b-form-input
            required
              id="reciverl"
              v-model="rlname"
              :state="null"
              placeholder="Last Name"
            ></b-form-input>
          </b-col>
        </b-row>

        <v-divider></v-divider>

        <b-row class="my-1">
          <b-col sm="2">
            <label class="font-weight-bold" for="input-invalid">Address :</label>
          </b-col>
          <b-col sm="9">
            <b-textarea v-model="address" required name="message" rows="3"></b-textarea>
          </b-col>
        </b-row>

        <v-divider></v-divider>
<!-------------------------------------------- category window ---------->
        <b-row class="my-1">
          <b-col sm="2">
            <label class="font-weight-bold" for="input-valid">Categories :</label>
          </b-col>
           <b-col sm="4">
            <v-row justify="center">
    <v-dialog
      v-model="dialog"
      scrollable
      max-width="300px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="#EEEEEE"
          v-bind="attrs"
          v-on="on"
        >
          Select Category
        </v-btn>
      </template>
      <v-card>
        <v-card-title>Select Category</v-card-title>
        <v-divider></v-divider>
        <v-card-text style="height: 300px;">
          <b-form-radio-group
            v-model="dialogm1"
            :options="category"
            name="radios-stacked"
        stacked
            column
          > </b-form-radio-group>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-btn
            color="blue darken-1"
            text
            @click="dialog = false"
          >
            Close
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            @click="dialog = false"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    
  </v-row>
          </b-col>
<b-col sm="4">
  <v-chip
      class="text-white"
      color="cyan"
    >{{ dialogm1 }} </v-chip>
</b-col>

        </b-row>

        <v-divider></v-divider>
        
        <b-row class="my-1">
          <b-col sm="2">
            <label class="font-weight-bold" for="input-invalid">E-Book file:</label>
          </b-col>
          <b-col sm="4">
           
              <v-file-input
                v-model="files"
                color="deep-purple accent-4"
                counter
                label="File input"
                multiple
                placeholder="Select your files"
                prepend-icon="mdi-paperclip"
                outlined
                :show-size="1000"
              >
                <template v-slot:selection="{ index, text }">
                  <v-chip
                    v-if="index < 2"
                    color="deep-purple accent-4"
                    dark
                    label
                    small
                  >
                    {{ text }}
                  </v-chip>

                  <span
                    v-else-if="index === 2"
                    class="overline grey--text text--darken-3 mx-2"
                  >
                    +{{ files.length - 2 }} File(s)
                  </span>
                </template>
              </v-file-input>
            </b-col>
            </b-row>

            <v-divider></v-divider>

            <b-row class="my-1">
             <b-col sm="2">
              <label class="font-weight-bold" for="input-invalid">Reciever's Mobile No:</label>
             
              </b-col>
              <b-col sm="4">
              <b-form-input
              id="mnumber"
              type="numbers"
              v-model="pnumber"
              required
              :state="null"
              placeholder="Enter Mobile No"
            ></b-form-input>
          </b-col>
        </b-row>

        <v-divider></v-divider>
         <b-button block type="submit" @click="validate" style=" background-image: linear-gradient( 90deg, #1dcce0, #4247dd, #4fc3f7);">Submit</b-button>

            </b-card>
      </v-form>
            </b-container>
            
  </div>
  
</template>
 

<script>
export default {
  data() {
    return {
      files: [],
     
      dialogm1: '-Select Category-',
      dialog: false,

     
        title: '',
        btype: true,
        authr: '',
        Sname: '',
        Sno: '',
        Description: '',
        rfname: '',
        rlname: '',
        address: '',
        pnumber: '',
      
     
       methods: {
    validate () {
        this.$refs.form.validate()
      },
   
    onSubmit() {
      this.$validator.validateAll().then(result => {
        if (!result) {
          return;
        }

        alert("Form submitted!");
      });
    }
       },    

      selected: "English",
      language: [
        { item: "English", name: "English" },
        { item: "Sinhala", name: "Sinhala" },
      ],


      category: [
          { text: 'Adventure', value: 'Adventure' },
          { text: 'Agriculture', value: 'Agriculture' },
          { text: 'Archaeology', value: 'Archaeology' },
          { text: 'Arts and Craft', value: 'Arts and Craft' },
          { text: 'Astrology', value: 'Astrology' },
          { text: 'Ayurveda', value: 'Ayurveda' },
          { text: 'Beauty Culture', value: 'Beauty Culture' },
          { text: 'Biography', value: 'Biography' },
          { text: 'Buddhism', value: 'Buddhism' },
          { text: 'Children', value: 'Children' },
          { text: 'Computer and IT', value: 'Computer and IT' },
          { text: 'Drama , Poem and Music', value: 'Drama , Poem and Music' },
          { text: 'Educational', value: 'Educational' },
          { text: 'Electronic and Mulimedia', value: 'Electronic and Mulimedia' },
          { text: 'Games and Sports', value: 'Games and Sports' },
          { text: 'General Knowledge and IQ', value: 'General Knowledge and IQ' },
          { text: 'Health and Fitness', value: 'Health and Fitness' },
          { text: 'History and Culture', value: 'History and Culture' },
          { text: 'Home and Garden', value: 'Home and Garden' },
          { text: 'Languages and Grammar', value: 'Languages and Grammar' },
          { text: 'Law and Legal', value: 'Law and Legal' },
          { text: 'LifeStyle and Family', value: 'LifeStyle and Family' },
          { text: 'Literature and Critics', value: 'Literature and Critics' },
          { text: 'Nature and Wild Life', value: 'Nature and Wild Life' },
          { text: 'News and Media', value: 'News and Media' },
          { text: 'Novels', value: 'Novels' },
          { text: 'Other', value: 'Other' },
          { text: 'Philosophy-Psychology', value: 'Philosophy-Psychology' },
          { text: 'Politics', value: 'Politics' },
          { text: 'Religion and Spirituality', value: 'Religion and Spirituality' },
          { text: 'Science and Fiction', value: 'Science and Fiction' },
          { text: 'Sociology and Folklore', value: 'Sociology and Folklore' },
          { text: 'Story', value: 'Story' },
          { text: 'Travel and Tourism', value: 'Travel and Tourism' },
          { text: 'Yoga and Meditation', value: 'Yoga and Meditation' }
        ],

        show: true,
    };
  },
};
</script>