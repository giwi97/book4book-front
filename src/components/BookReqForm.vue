<template>
  <v-container>
    <div class="descriptionCard">
      <v-card class="mx-auto rounded-xl" color="#3b453f" dark max-width="700">
        <validation-observer ref="observer" v-slot="">
          <form>
            <validation-provider
              v-slot="{ errors }"
              name="Name"
              rules="required|max:10"
            >
              <v-text-field
                v-model="name"
                :counter="10"
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
              name="select"
              rules="required"
            >
              <v-select
                v-model="select"
                :items="items"
                :error-messages="errors"
                label="Select"
                data-vv-name="select"
                required
              ></v-select>
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
export default {
  name: "BookReqForm",

  data: () => ({}),
};
</script>
