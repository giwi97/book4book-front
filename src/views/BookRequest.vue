<template>
  <v-content>
    <BookReqForm />
  </v-content>
</template>

<script>
import BookReqForm from '../components/BookReqForm'

export default {
  name: "BookRequest",

  components: {

    BookReqForm,

  },

  data() {
    return {
      items: [
      ],
    };
  },
};
</script>
