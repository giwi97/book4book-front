<template>
  <v-content>
    <div class="staticHero">
      <v-img max-height="150" src="../assets/images/ded.jpg">
        <v-row align="end" class="lightbox white--text pa-2 fill-height">
          <v-col>
            <v-container>
              <h1
                style="font-size: 3.2vw"
                class="text-center font-weight-regular"
              >
                Donate Book Details
              </h1>
            </v-container>
          </v-col>
        </v-row>
      </v-img>
    </div>
    <br />
    <v-card :elevation="10" style="max-width: 75%" class="text-center" border-variant="info">
      <v-card-title
        class="headline font-weight-regular white--text"
        style="background-image: linear-gradient(79deg, #1dcce0, teal)"
      >
        Details form
      </v-card-title>
      <v-spacer></v-spacer>
      <validation-observer ref="observer" v-slot="{}">
        <form style="padding: 10px">
<validation-provider v-slot="{ }" name="Book Type" rules="required" class="text-center" >
<v-radio-group  v-model="btype" row :mandatory="false" >
      <v-radio
        label="E-Book"
        value="true"
      ></v-radio>
      <v-radio
        label="Books"
        value="false"
      ></v-radio>
    </v-radio-group>
</validation-provider>

          <validation-provider
            v-slot="{ errors }"
            name="BookTitle"
            rules="required|min:1"
          >
            <v-text-field
              v-model="name"
              :counter="100"
              :error-messages="errors"
              label="Book Title"
              required
            ></v-text-field>
          </validation-provider>
          <validation-provider
            v-slot="{ errors }"
            name="Author"
            rules="required"
          >
            <v-text-field
              v-model="Author"
              :error-messages="errors"
              label="Author Name"
              required
            ></v-text-field>
          </validation-provider>

          <b-row class="my-1">
          <b-col sm="4">
            <validation-provider
            v-slot="{ errors }"
            name="Series Name"
            rules="required"
          >
            <v-text-field
              v-model="SeriesName"
              :error-messages="errors"
              label="Series Name"
              required
            ></v-text-field>
          </validation-provider>
          </b-col>
          <b-col sm="4">
            <validation-provider
            v-slot="{ errors }"
            name="Series Number"
            rules="required|Number"
          >
            <v-text-field
              v-model="SeriesNo"
              :error-messages="errors"
              label="Series Number"
              required
            ></v-text-field>
          </validation-provider>
          </b-col>
        </b-row>

          <validation-provider
            v-slot="{ errors }"
            name="Description"
            rules="required"
          >
            <v-text-field
              v-model="Description"
              :error-messages="errors"
              label="Description"
              required
            ></v-text-field>
          </validation-provider>

           <b-row class="my-1">
          <b-col sm="4">
             <validation-provider v-slot="{ errors }" name="Reciever's First Name" rules="required">
            <v-text-field
              v-model="rfname"
              :error-messages="errors"
              label="Reciever's First Name"
              required
            ></v-text-field>
          </validation-provider>
          </b-col>
          <b-col sm="4">
            <validation-provider v-slot="{ errors }" name="Reciever's Last Name" rules="required">
            <v-text-field
              v-model="rlname"
              :error-messages="errors"
              label="Reciever's Last Name"
              required
            ></v-text-field>
          </validation-provider>
          </b-col>
        </b-row>
 
          <validation-provider
            v-slot="{ errors }"
            name="Address"
            rules="required"
          >
            <v-text-field
              v-model="Address"
              :error-messages="errors"
              label="Reciever Address"
              required
            ></v-text-field>
          </validation-provider>
 <!--------------------------------------------- category start ------------------->   
          <b-row class="my-1">
           <b-col sm="4">
            <v-row justify="center">
    <v-dialog
      v-model="dialog1"
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
           <validation-provider  v-slot="{ }" name="Category" rules="required" >
          <b-form-radio-group
            v-model="dialogm"
            :options="category"
            name="radios-stacked"
        stacked
            column
          > </b-form-radio-group>
          
  </validation-provider>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-btn
            color="blue darken-1"
            text
            @click="dialog1 = false"
          >
            Close
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            @click="dialog1 = false"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
      
    </v-dialog>
    
        </v-row>
        </b-col>
        <b-col sm="4">
            <v-chip class="text-white" color="cyan">{{ dialogm }} </v-chip>
        </b-col>
        </b-row>
<!------------------------------------------------- category end --------------------->
<v-divider></v-divider>
<validation-provider v-slot="{ }" name="if you love to send E-book use this" rules="required">
        <b-row class="my-1">
          <b-col sm="4">
           
              <v-file-input
                :disabled='isDisabled'
                v-model="files"
                color="deep-purple accent-4"
                counter
                label="File input"
                multiple
                placeholder="* if you love to send E-book use this"
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
</validation-provider>
<!--------------------------------- end file upload ---------------->

  <validation-provider
                v-slot="{ errors }"
                name="email"
                rules="required|email"
              >
                <v-text-field
                  v-model="email"
                  :error-messages="errors"
                  label="Reciever E-mail"
                  required
                ></v-text-field>
              </validation-provider>

          <br>
          <v-row align="end" justify-md="end">
            <!-- @click="submit"-->
             <v-btn block dark type="submit"  
             :disabled="dialog"
              :loading="dialog"
              @click="dialog = true"
               style="background-image: linear-gradient( 150deg, #1dcce0, teal);">Submit</v-btn>
          
            <v-dialog v-model="dialog" hide-overlay persistent width="300">
              <v-card color="#1dcce0" dark>
                <v-card-text>
                  Please wait...
                  <v-progress-linear
                    indeterminate
                    color="white"
                    class="mb-0"
                  ></v-progress-linear>
                </v-card-text>
              </v-card>
            </v-dialog>
          </v-row>
        </form>
      </validation-observer>
    </v-card>
    <br />
    <br />
  </v-content>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import { required, min ,numeric} from "vee-validate/dist/rules";
import {
  extend,
  ValidationObserver,
  ValidationProvider,
  setInteractionMode,
} from "vee-validate";

setInteractionMode("eager");

extend("required", {
  ...required,
  message: "{_field_} can not be empty",
});

extend("min", {
  ...min,
  message: "{_field_} may not be lower than {length} characters",
});

extend("Number", {
  ...numeric,
  message: "It must me a Number",
});
export default {
  name: "BookOffers",

computed: {
      isDisabled() {
        // you can  check your form is filled or not here.
        return this.btype == true
      },
    }, 

  components: {
    ValidationProvider,
    ValidationObserver,
  },


  data: () => ({
    dialog1: false,
  dialogm: "-Select Category-",
    files: [],
    title: "",
    btype: "true",
    author: "",
    SeriesName: "",
    SeriesNo: "",
    Description: "",
    rfname: "",
    rlname: "",
    Address: "",
    email: "",
    errors: null,
    dialog: false,
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
  }),

  methods: {
    submit() {
      this.$refs.observer.validate();
    },
  },
  watch: {
    dialog(val) {
      this.$refs.observer.validate();
      if (!this.errors) {
        if (!val) return;
        setTimeout(() => (this.dialog = false), 4000);
        setTimeout(() => this.$router.push({ path: "/bookoffers" }), 4000);
      } else {
        return false;
      }
      //this.$router.push("/login");
    },
  },

 

};
</script>
