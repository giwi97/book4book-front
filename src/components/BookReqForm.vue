<template>
  <v-container>
    <div class="descriptionCard">
      <v-card class="mx-auto rounded-xl" color="#616161" dark max-width="700">
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
            <validation-provider v-slot="" rules="required" name="checkbox">
              <v-checkbox
                v-model="checkbox"
                :error-messages="errors"
                value="1"
                label="Option"
                type="checkbox"
                required
              ></v-checkbox>
            </validation-provider>

            <v-btn class="mr-4" @click="submit">
              submit
            </v-btn>
            <v-btn @click="clear">
              clear
            </v-btn>
          </form>
        </validation-observer>
      </v-card>
    </div>
  </v-container>
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
