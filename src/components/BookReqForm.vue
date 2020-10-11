<template>
<div class="block latestPostBlock">
  <v-container>
    <h2 class="text-center">Book Request</h2>
    <div class="descriptionCard">
      <v-card class="mx-auto rounded-xl" color="#g6dh4" dark max-width="500">
        <validation-observer ref="observer" v-slot="">
          <form>
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

            <v-btn rounded color="success" @click="submit">
              submit
            </v-btn>
            <v-btn rounded color="error" @click="clear">
              clear
            </v-btn>
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
    checkbox: null,
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
      this.checkbox = null;
      this.$refs.observer.reset();
    },
  },
};
</script>
