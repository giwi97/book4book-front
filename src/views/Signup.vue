<template>
    <v-content>
      <v-container class="fill-height" fluid 
    style="height: 1000px">
    
      <v-row  justify="center"> 
        <v-col
      cols="12"
      sm="10">      

<v-card
    class="mx-auto"
    color="#651FFF"
    dark
    max-height="1000"
    max-width="1000"
  >
  <v-card-title class="headline font-weight-bold blue-grey white--text">
      CREATE ACCOUNT
    </v-card-title>
    <v-divider
      class="mx-4"
      vertical
    ></v-divider>
    
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
     <v-col
     md="10"
        offset-md="1">     

    <v-text-field
      v-model="name"
      
      :counter="10"
      :rules="nameRules"
      label="First Name"
      required
    ></v-text-field>

      <v-text-field
      v-model="lname"
      :counter="10"
      :rules="nameRules"
      label="Last Name"
      required
    ></v-text-field>

   <v-text-field
      v-model="date"
      :rules="emailRules"
      label="Birth Date"
      required
    ></v-text-field>

    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="E-mail"
      required
    ></v-text-field>
    
    <v-text-field
      v-model="Telephone"
      :counter="10"
      :rules="TelephoneRules"
      label="Telephone No"
      required
    ></v-text-field>

    <v-autocomplete
     ref="country"
      v-model="country"
      :rules="[() => !!country || 'This field is required']"
      :items="countries"
      label="Country"
      placeholder="Select..."
       required
    ></v-autocomplete>

     <v-text-field
      v-model="Address"
      label="Address"
      required
    ></v-text-field>

      <v-divider
      class="mx-4"
      vertical
    ></v-divider>

    <v-checkbox
      v-model="checkbox"
      :rules="[v => !!v || 'You must agree to continue!']"
      label="Do you agree?"
      required
    ></v-checkbox>
     </v-col>
  <v-divider
      class="mx-4"
      vertical
    ></v-divider>

      <v-col
        md="10"
        offset-md="4">
    <v-btn
      :disabled="!valid"
      color="success"
      class="mr-4"
      @click="Submit"
      router-link to="/Profile"
    >
      Submit
    </v-btn>

   <v-btn
      color="error"
      class="mr-4"
      @click="reset"
    >
      clear
    </v-btn>
      </v-col>
      <v-divider
      class="mx-4"
      vertical
    ></v-divider>


  <v-col
    md="10"
    offset-md="3">
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-8"
          dark
          color="#FFFFFF"
          icon >

          <v-icon size="50px">
            {{ icon }}
          </v-icon>
        </v-btn>
      
  </v-col>

      </v-form>
</v-card>
        </v-col>
    </v-row>
      </v-container>
    </v-content>
    
 
  
</template>

<script>
  export default {  
  
    data: () => ({

        icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],

            countries: ['Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Anguilla', 'Antigua &amp; Barbuda', 'Argentina', 'Armenia', 'Aruba', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bermuda', 'Bhutan', 'Bolivia', 'Bosnia &amp; Herzegovina', 'Botswana', 'Brazil', 'British Virgin Islands', 'Brunei', 'Bulgaria', 'Burkina Faso', 'Burundi', 'Cambodia', 'Cameroon', 'Cape Verde', 'Cayman Islands', 'Chad', 'Chile', 'China', 'Colombia', 'Congo', 'Cook Islands', 'Costa Rica', 'Cote D Ivoire', 'Croatia', 'Cruise Ship', 'Cuba', 'Cyprus', 'Czech Republic', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic', 'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea', 'Estonia', 'Ethiopia', 'Falkland Islands', 'Faroe Islands', 'Fiji', 'Finland', 'France', 'French Polynesia', 'French West Indies', 'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Gibraltar', 'Greece', 'Greenland', 'Grenada', 'Guam', 'Guatemala', 'Guernsey', 'Guinea', 'Guinea Bissau', 'Guyana', 'Haiti', 'Honduras', 'Hong Kong', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Isle of Man', 'Israel', 'Italy', 'Jamaica', 'Japan', 'Jersey', 'Jordan', 'Kazakhstan', 'Kenya', 'Kuwait', 'Kyrgyz Republic', 'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Macau', 'Macedonia', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Mauritania', 'Mauritius', 'Mexico', 'Moldova', 'Monaco', 'Mongolia', 'Montenegro', 'Montserrat', 'Morocco', 'Mozambique', 'Namibia', 'Nepal', 'Netherlands', 'Netherlands Antilles', 'New Caledonia', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'Norway', 'Oman', 'Pakistan', 'Palestine', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Poland', 'Portugal', 'Puerto Rico', 'Qatar', 'Reunion', 'Romania', 'Russia', 'Rwanda', 'Saint Pierre &amp; Miquelon', 'Samoa', 'San Marino', 'Satellite', 'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles', 'Sierra Leone', 'Singapore', 'Slovakia', 'Slovenia', 'South Africa', 'South Korea', 'Spain', 'Sri Lanka', 'St Kitts &amp; Nevis', 'St Lucia', 'St Vincent', 'St. Lucia', 'Sudan', 'Suriname', 'Swaziland', 'Sweden', 'Switzerland', 'Syria', 'Taiwan', 'Tajikistan', 'Tanzania', 'Thailand', "Timor L'Este", 'Togo', 'Tonga', 'Trinidad &amp; Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Turks &amp; Caicos', 'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'United States', 'Uruguay', 'Uzbekistan', 'Venezuela', 'Vietnam', 'Virgin Islands (US)', 'Yemen', 'Zambia', 'Zimbabwe'],
            address: null,          
            country: null,
            formHasErrors: false,

      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
     
      checkbox: false,
    }),

    methods: {
      submit () {
        this.$refs.form.submit()
      },
     reset () {
        this.$refs.form.reset()
      },
    },
  }
</script>




