<template>
    <v-content>
      <v-container class="fill-height" fluid style="height: 1350px">
      <v-row  justify="center"> 
        <v-col cols="12" sm="10">      

      <v-card class="mx-auto" light max-height="1250" max-width="1000">
             <div id="loginF" style="color:white;font-weight:bold;">
              Create Account
            </div>
          <v-divider vertical ></v-divider>
         <v-col md="10" offset-md="4">
        <v-avatar class="profile" color="grey" size="200" margin-top="50px">
            <v-img src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"></v-img>
          </v-avatar>
        </v-col>
          <v-divider vertical ></v-divider>

        <validation-observer  ref="observer" v-slot="">
          <v-form ref="form" v-model="valid" lazy-validation >
          <v-col md="10" offset-md="1">     

        <validation-provider v-slot="{ errors }" name="FName" rules="required|max:10"  >
            <v-text-field v-model="fname" :counter="10" :error-messages="errors" label="First Name" required ></v-text-field>
         </validation-provider>

      <validation-provider v-slot="{ errors }" name="LName" rules="required|max:10"  >
        <v-text-field v-model="lname" :counter="10" :error-messages="errors" label="Last Name" required ></v-text-field>
      </validation-provider>

       <v-menu ref="menu" v-model="menu" :close-on-content-click="false" transition="scale-transition" offset-y min-width="290px">
          <template v-slot:activator="{ on, attrs }">
              <v-text-field v-model="date" label="Birthday date" readonly v-bind="attrs" v-on="on" ></v-text-field>
          </template>
           <v-date-picker ref="picker" v-model="date" :max="new Date().toISOString().substr(0, 10)" min="1950-01-01" @change="save" ></v-date-picker>
        </v-menu>

        <validation-provider v-slot="{ errors }" name="email" rules="required|email" >
           <v-text-field v-model="email" :error-messages="errors" label="E-mail" required></v-text-field>
        </validation-provider>

        <validation-provider v-slot="{ errors }" name="telephone" rules="required|max:10" >
            <v-text-field v-model="telephone"  :counter="10" :error-messages="errors" label="Telephone" required ></v-text-field>
       </validation-provider>

        <validation-provider v-slot="{ errors }" name="select" rules="required" >
           <v-select v-model="select" :items="items" :error-messages="errors" label="Country" data-vv-name="select" required></v-select>
        </validation-provider>

        <validation-provider v-slot="{ errors }" name="ZIP" rules="required|max:5"  >
            <v-text-field v-model="ZIP" :counter="5" :error-messages="errors" label="ZIP code" required ></v-text-field>
        </validation-provider>

        <validation-provider v-slot="{ errors }" name="Address" rules="required|max:40"  >
            <v-text-field v-model="Address" :counter="40" :error-messages="errors" label="Address" required></v-text-field>
        </validation-provider>
          <v-divider class="mx-4" vertical ></v-divider>
        </v-col>

        <v-col md="10" offset-md="4">   
           <v-btn class="mr-4"  color="success" @click="submit = true " > Save </v-btn>
           <v-btn  color="error" class="mr-4" @click="clear">  Clear</v-btn>
        </v-col>
        <v-divider class="mx-4" vertical></v-divider>

    </v-form>
      <v-progress-linear color="cyan darken-2" rounded value="100" ></v-progress-linear>
    </validation-observer>
</v-card>
        </v-col>
    </v-row>
      </v-container>
    </v-content>
    
 
  
</template>

<script>
 
  import { required, email, max } from 'vee-validate/dist/rules'
  import { extend, ValidationObserver, ValidationProvider, setInteractionMode } from 'vee-validate'

  setInteractionMode('eager')

  extend('required', {
    ...required,
    message: '{_field_} can not be empty',
  })

  extend('max', {
    ...max,
    message: '{_field_} may not be greater than {length} characters',
  })

  extend('email', {
    ...email,
    message: 'Email must be valid',
  })

  export default {
    components: {
      ValidationProvider,
      ValidationObserver,
    },
    data: () => ({

        data: () => ({
      date: null,
      menu: false,
    }),
    watch: {
      menu (val) {
        val && setTimeout(() => (this.$refs.picker.activePicker = 'YEAR'))
      },
    },
    methods: {
      save (date) {
        this.$refs.menu.save(date)
      },
    },

      fname: '',
      lname: '',
      email: '',
      telephone:'',
      Address: '',
      date: '',
      ZIP: '',
      select: null,
      errors: null,
      items:['Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Anguilla', 'Antigua &amp; Barbuda', 'Argentina', 'Armenia', 'Aruba', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bermuda', 'Bhutan', 'Bolivia', 'Bosnia &amp; Herzegovina', 'Botswana', 'Brazil', 'British Virgin Islands', 'Brunei', 'Bulgaria', 'Burkina Faso', 'Burundi', 'Cambodia', 'Cameroon', 'Cape Verde', 'Cayman Islands', 'Chad', 'Chile', 'China', 'Colombia', 'Congo', 'Cook Islands', 'Costa Rica', 'Cote D Ivoire', 'Croatia', 'Cruise Ship', 'Cuba', 'Cyprus', 'Czech Republic', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic', 'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea', 'Estonia', 'Ethiopia', 'Falkland Islands', 'Faroe Islands', 'Fiji', 'Finland', 'France', 'French Polynesia', 'French West Indies', 'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Gibraltar', 'Greece', 'Greenland', 'Grenada', 'Guam', 'Guatemala', 'Guernsey', 'Guinea', 'Guinea Bissau', 'Guyana', 'Haiti', 'Honduras', 'Hong Kong', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Isle of Man', 'Israel', 'Italy', 'Jamaica', 'Japan', 'Jersey', 'Jordan', 'Kazakhstan', 'Kenya', 'Kuwait', 'Kyrgyz Republic', 'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Macau', 'Macedonia', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Mauritania', 'Mauritius', 'Mexico', 'Moldova', 'Monaco', 'Mongolia', 'Montenegro', 'Montserrat', 'Morocco', 'Mozambique', 'Namibia', 'Nepal', 'Netherlands', 'Netherlands Antilles', 'New Caledonia', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'Norway', 'Oman', 'Pakistan', 'Palestine', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Poland', 'Portugal', 'Puerto Rico', 'Qatar', 'Reunion', 'Romania', 'Russia', 'Rwanda', 'Saint Pierre &amp; Miquelon', 'Samoa', 'San Marino', 'Satellite', 'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles', 'Sierra Leone', 'Singapore', 'Slovakia', 'Slovenia', 'South Africa', 'South Korea', 'Spain', 'Sri Lanka', 'St Kitts &amp; Nevis', 'St Lucia', 'St Vincent', 'St. Lucia', 'Sudan', 'Suriname', 'Swaziland', 'Sweden', 'Switzerland', 'Syria', 'Taiwan', 'Tajikistan', 'Tanzania', 'Thailand', "Timor L'Este", 'Togo', 'Tonga', 'Trinidad &amp; Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Turks &amp; Caicos', 'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'United States', 'Uruguay', 'Uzbekistan', 'Venezuela', 'Vietnam', 'Virgin Islands (US)', 'Yemen', 'Zambia', 'Zimbabwe'],
      checkbox: null,
    }),

    methods: {
      submit () {
        this.$refs.observer.validate()
      },

      clear () {
        this.fname = ''
        this.lname = ''
        this.date= ''
        this.email = ''
        this.ZIP = ''
        this.telephone= ''
        this.Address= ''
        this.select = null
        this.checkbox = null
        this.$refs.observer.reset()
      },
    },

    watch: {
    submit(val) {
      this.$refs.observer.validate();
      if (!this.errors) {
        if (!val) return;
        setTimeout(() => (this.submit = false), 4000);
        setTimeout(() => this.$router.push({ path: '/profile'}), 4000);
        
      }else{
        return false
      }
    },
  },
  }
</script>



<style>
#bookreq {
  height: 45px;
  background-color: teal;
  color: white;
  font-weight: bold;
  text-align: center;
  padding-top: 10px;
  font-size: 18px;
  margin: -20px -11px 10px -11px;
}
</style>
