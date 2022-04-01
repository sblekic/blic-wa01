<template>
  <v-app class="blue-grey darken-4">
    <v-container class="blue-grey darken-4">
      <v-card dark class="mx-auto" outlined>
        <v-list-item three-line>
          <v-list-item-avatar tile>
            <v-avatar color="indigo">
              <v-icon dark> mdi-account-circle </v-icon>
            </v-avatar>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title class="text-h5 mb-1">
              {{ bookDetails.name }}
            </v-list-item-title>
            <v-list-item-subtitle>
              {{ bookDetails.author }}
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-card-actions>
          <v-btn disabled outlined rounded text>
            {{ bookDetails.isbn }}
          </v-btn>
          <v-btn disabled outlined rounded text>
            Pages: {{ bookDetails.pageNum }}
          </v-btn>
          <v-btn disabled outlined rounded text>
            Characters: {{ bookDetails.charNum }}
          </v-btn>
          <v-btn disabled outlined text> {{ bookDetails.publisher }} </v-btn>
          <v-btn disabled outlined text> {{ bookDetails.country }} </v-btn>
          <v-btn @click="goBack()" dark color="red">back to book list</v-btn>
        </v-card-actions>
      </v-card>
    </v-container>
  </v-app>
</template>

<script>
import store from "@/localStorage";

export default {
  name: "BookDetails",
  props: {
    isbn: String,
  },
  data() {
    return {
      store,
      bookDetails: {},
      avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
    };
  },
  mounted() {
    let value = this.isbn;
    let chosenBook = this.store.books.findIndex((x) => x.isbn === value);
    this.bookDetails = store.books[chosenBook];
  },
  methods: {
    goBack() {
      this.$router.push({ name: "home" });
    },
  },
};
</script>
