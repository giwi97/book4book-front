<template>
  <div class="block latestPostBlock">
    <v-container>
      <h2 class="text-center">Book Request</h2>
      <div class="descriptionCard">
        <v-card class="mx-auto lg" color="#E0E0E0" max-width="500">
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
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </v-container>
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
    dialog(val) {
      this.$refs.observer.validate();
      if (!this.errors) {
        if (!val) return;
        setTimeout(() => (this.dialog = false), 4000);
        setTimeout(() => this.$router.push({ path: "/bookrequest" }), 4000);
      } else {
        return false;
      }
      //this.$router.push("/login");
    },
  },
};
</script>
