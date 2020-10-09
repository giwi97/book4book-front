<template>
    <v-content>
      <v-container class="fill-height" fluid 
    style="height: 500px">
      <v-row  justify="center">  
        <v-col
      cols="12"
      sm="10"
      md="8"
      lg="6"  >     

  <v-form
    ref="form"
    v-model="valid"
    lazy-validation >
  
    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="E-mail"
      required
    ></v-text-field>

    <v-text-field
      v-model="password"
      :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
      :rules="[rules.required, rules.min]"
      :type="show1 ? 'text' : 'password'"
      name="input-10-1"
      label="Normal with hint text"
      hint="At least 8 characters"
      counter
      @click:append="show1 = !show1"
      ></v-text-field>

<v-divider
      class="mx-4"
      vertical
    ></v-divider>
    
    <v-checkbox
      v-model="checkbox"
      :rules="[v => !!v || 'Forget your password!']"
      label="forget your password?"
      required
    ></v-checkbox>


 <v-col
        md="10"
        offset-md="4">
    <v-btn
      :disabled="!valid"
      color="success"
      class="mr-4"
      @click="validate"
       router-link to="/Editpro"  >
      Login
    </v-btn>

    <v-btn
      color="error"
      class="mr-4"
      @click="reset"
    >
      Sign-up
    </v-btn>
    </v-col>

    <v-divider
      class="mx-4"
      vertical
    ></v-divider>

  <v-col
    md="10"
    offset-md="2">
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-8"
          dark
          color="primary"
          icon >

          <v-icon size="50px">
            {{ icon }}
          </v-icon>
        </v-btn>
      
  </v-col>

    
  </v-form>
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

      valid: true,
      
       show1: false,
        password: 'Password',
        rules: {
          required: value => !!value || 'Required.',
          min: v => v.length >= 8 || 'Min 8 characters',
          emailMatch: () => ('The email and password you entered don\'t match'),
        },
      
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
     
      checkbox: false,
    }),

    methods: {
      Login () {
        this.$refs.form.Login()
      },
      Sign () {
        this.$refs.form.Sign()
      },
     
    },
  }


 
</script>
