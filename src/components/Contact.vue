<template>
  <v-content>
    <v-row>
      <v-col>
        <div style="margin-left: 8%; width: 92%; padding-top: 10px">
          <v-card class="mx-auto" max-width="344" outlined elevation="8">
            <form>
              <div id="addBook">Contact Us</div>
              <!--Name-->
              <v-text-field
                v-model="name"
                :error-messages="nameErrors"
                label="Name"
                required
                @input="$v.name.$touch()"
                @blur="$v.name.$touch()"
              ></v-text-field>
              <!--Email-->
              <v-text-field
                v-model="email"
                :error-messages="emailErrors"
                label="E-mail"
                required
                @input="$v.email.$touch()"
                @blur="$v.email.$touch()"
              ></v-text-field>
              <!--subject-->
              <v-text-field
                v-model="subject"
                :error-messages="subjectErrors"
                label="Subject"
                required
                @input="$v.subject.$touch()"
                @blur="$v.subject.$touch()"
              ></v-text-field>
              <!--Description-->
              <v-textarea
                v-model="description"
                :error-messages="descriptionErrors"
                label="Description"
                required
                @input="$v.description.$touch()"
                @blur="$v.description.$touch()"
              ></v-textarea>

              <!--checkbox-->
              <v-checkbox
                v-model="checkbox"
                :error-messages="checkboxErrors"
                label="Do you agree?"
                required
                @change="$v.checkbox.$touch()"
                @blur="$v.checkbox.$touch()"
              ></v-checkbox>
              <div style="float: right; margin: 0px 39px 20px 0px">
                <!--Submit Button -->
                <v-btn class="mr-4" @click="submit" color="success">
                  submit
                </v-btn>

                <!--Clear Button -->
                <v-btn @click="clear"> clear </v-btn>
              </div>
            </form>
            <v-progress-linear
              color="cyan darken-2"
              rounded
              value="100"
            ></v-progress-linear>
          </v-card>
        </div>
      </v-col>
      <v-col>
        <p>Address</p>
        <p>No. 001</p>
        <p>colombo 00</p>
        <p>Western Province</p>
        <p>Sri Lanka</p>
        <br />
        <p>Email:</p>
        <p>book4book@uiu.com</p>
        <br />
        <p>Phone Number</p>
        <p>011 2222 222</p>
      </v-col>
    </v-row>
  </v-content>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, email } from "vuelidate/lib/validators";

export default {
  mixins: [validationMixin],

  validations: {
    name: { required },
    email: { required, email },
    subject: { required },
    description: { required },
    checkbox: {
      checked(val) {
        return val;
      },
    },
  },

  data: () => ({
    name: "",
    email: "",
    subject: "",
    description: "",
    checkbox: false,
  }),

  computed: {
    checkboxErrors() {
      const errors = [];
      if (!this.$v.checkbox.$dirty) return errors;
      !this.$v.checkbox.checked && errors.push("You must agree to continue!");
      return errors;
    },
    nameErrors() {
      const errors = [];
      if (!this.$v.name.$dirty) return errors;
      !this.$v.name.required && errors.push("Name is required.");
      return errors;
    },
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.email && errors.push("Must be valid e-mail");
      !this.$v.email.required && errors.push("E-mail is required");
      return errors;
    },
    subjectErrors() {
      const errors = [];
      if (!this.$v.subject.$dirty) return errors;
      !this.$v.subject.required && errors.push("Subject is required.");
      return errors;
    },
    descriptionErrors() {
      const errors = [];
      if (!this.$v.description.$dirty) return errors;
      !this.$v.description.required && errors.push("Description is required.");
      return errors;
    },
  },

  methods: {
    submit() {
      this.$v.$touch();
    },
    clear() {
      this.$v.$reset();
      this.name = "";
      this.email = "";
      this.subject = "";
      this.description = "";
      this.checkbox = false;
    },
  },
};
</script>