<template>
    <v-content>
      <v-container class="fill-height" fluid 
     style="height: 900px">
      <v-row  justify="center">  

        <v-col
      cols="12"
      sm="10">     

 <v-card
    class="mx-auto"
    color="#651FFF"
    dark
    max-height="1000"
    max-width="850"
  >
  <v-card-title class="headline font-weight-bold blue-grey hite--text">
      LOGIN
    </v-card-title>
    <v-divider
      class="mx-4"
      vertical
    ></v-divider>

  <v-form
    ref="form"
    v-model="valid"
    lazy-validation >
  <v-col
    md="10"
    offset-md="1">
    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="E-mail"
      required
    ></v-text-field>

<v-divider
      class="mx-4"
      vertical
    ></v-divider>
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
    
   <router-link  to="/Signup"><h4>Forget Password</h4></router-link>
    
  </v-col>
<v-divider
      class="mx-4"
      vertical
    ></v-divider>

 <v-col
        md="50"
        offset-md="4">
    <v-btn
      :disabled="!valid"
      color="success"
      class="mr-4"
      @click="Submit = true"
       router-link to="/Home"  >
      Login
    </v-btn>

     <v-btn
      color="error"
      class="mr-4"
      @click="reset"
    >
      Clear
    </v-btn>
    </v-col>

    <v-divider
      class="mx-4"
      vertical
    ></v-divider>

<v-col
        md="50"
        offset-md="1">
<h4>Not a member yet..........? </h4>

</v-col>
<v-col
        md="15"
        offset-md="4">
<v-btn
      color="warning"
      class="mr-4"
      @click="validate">
     create a new account
    </v-btn>

</v-col>
<v-divider
      class="mx-4"
      vertical
    ></v-divider>
    
  <v-col
    md="8"
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
      reset () {
        this.$refs.form.reset()
      },
    },
     watch: {
    Submit(val) {
      this.$refs.observer.validate();
      if (!this.errors) {
        if (!val) return;
        setTimeout(() => (this.Submit = false), 4000);
        setTimeout(() => this.$router.push({ path: '/Home'}), 4000);
        
      }else{
        return false
      }
    },
  },
  }


 
</script>
