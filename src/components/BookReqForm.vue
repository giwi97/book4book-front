<template>
  <div>
    <div class="staticHero">
      <v-img max-height="150" src="../assets/images/ggg.jpg">
        <v-row align="end" class="lightbox white--text pa-2 fill-height">
          <v-col>
            <v-container>
              <div class="headline">Book Request</div>
            </v-container>
          </v-col>
        </v-row>
      </v-img>
    </div>
    <div class="block">
      <div class="descriptionCard">
        <v-card class="mx-auto lg" max-width="500">
          <div id="bookreq">Request a Book</div>
          <v-spacer></v-spacer>
          <validation-observer ref="observer" v-slot="">
            <form style="padding:10px;">
              <validation-provider
                v-slot="{ errors }"
                name="Name"
                rules="required|max:100"
              >
                <v-text-field
                  v-model="name"
                  :counter="100"
                  :error-messages="errors"
                  label="Name"
                  id="name"
                  required
                ></v-text-field>
              </validation-provider>
              <validation-provider
                v-slot="{ errors }"
                name="email"
                rules="required|email"
              >
                <v-text-field
                  v-model="email"
                  :error-messages="errors"
                  label="E-mail"
                  id="email"
                  required
                ></v-text-field>
              </validation-provider>
              <validation-provider
                v-slot="{ errors }"
                name="address"
                rules="required"
              >
                <v-text-field
                  v-model="address"
                  :error-messages="errors"
                  label="Your Address"
                  id="address"
                  required
                ></v-text-field>
              </validation-provider>
              <validation-provider
                v-slot="{ errors }"
                name="book"
                rules="required"
              >
                <v-text-field
                  v-model="book"
                  :error-messages="errors"
                  label="Book name"
                  id="book"
                  required
                ></v-text-field>
              </validation-provider>

              <br />
              <v-row align="end" justify-md="end">
                <!-- @click="submit"                  -->
                <v-btn
                  :disabled="dialog"
                  :loading="dialog"
                  rounded
                  color="success"
                  @click="dialog = true"
                >
                  submit
                </v-btn>
                <v-btn rounded color="error" @click="clear">
                  clear
                </v-btn>
                <v-dialog v-model="dialog" hide-overlay persistent width="300">
                  <v-card color="primary" dark>
                    <v-card-text>
                      Submitting, Please wait...
                      <v-progress-linear
                        indeterminate
                        color="white"
                        class="mb-0"
                      ></v-progress-linear>
                    </v-card-text>
                  </v-card>
                </v-dialog>
                <v-snackbar v-model="snackbar">
                  {{ text }}

                  <template v-slot:action="{ attrs }">
                    <v-btn
                      color="pink"
                      text
                      v-bind="attrs"
                      @click="snackbar = false"
                    >
                      Close
                    </v-btn>
                  </template>
                </v-snackbar>
              </v-row>
            </form>
          </validation-observer>
          <v-progress-linear
            color="cyan darken-2"
            rounded
            value="100"
          ></v-progress-linear>
        </v-card>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  </div>
</template>

<script>
import { required, email, max } from "vee-validate/dist/rules";
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

extend("max", {
  ...max,
  message: "{_field_} may not be greater than {length} characters",
});

extend("email", {
  ...email,
  message: "Email must be valid",
});

export default {
  name: "BookReqForm",

  components: {
    ValidationProvider,
    ValidationObserver,
  },

  data: () => ({
    name: "",
    email: "",
    address: "",
    book: "",
    errors: null,
    dialog: false,
    snackbar: false,
    text: "Submitted",
  }),

  methods: {
    submit() {
      this.$refs.observer.validate();
    },
    clear() {
      this.name = "";
      this.email = "";
      this.address = "";
      this.book = "";
      this.$refs.observer.reset();
    },
  },
  watch: {
    async dialog(val) {
      const isValid = await this.$refs.observer.validate();
      if (!isValid) {
        this.dialog = false;
        return;
      } else {
        if (!val) return;
        setTimeout(() => (this.dialog = false), 4000);
        setTimeout(() => location.reload(), 5000);
        
      }
      setTimeout(() => (this.snackbar = true), 3000);
    },
  },
};
</script>
<style>
#bookreq {
  height: 45px;
  background-image: linear-gradient(79deg, #1dcce0, teal);
  color: white;
  font-weight: bold;
  text-align: center;
  padding-top: 10px;
  font-size: 18px;
  margin: -20px -11px 10px -11px;
}
</style>
