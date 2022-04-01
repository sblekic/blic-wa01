<template>
  <v-app>
    <v-main class="blue-grey darken-4">
      <v-container class="py-3 px-6" fluid>
        <v-row class="blue-grey darken-4">
          <v-col cols="12">
            <v-card dark class="grey darken-4">
              <v-subheader class="text-h6">list of books</v-subheader>
              <v-list two-line>
                <!-- mjesto za ubacivanje commita -->
                <template v-for="book in store.books">
                  <v-list-item :key="book.isbn">
                    <v-list-item-avatar color="grey darken-1">
                      <v-avatar color="indigo">
                        <v-icon dark> mdi-book </v-icon>
                      </v-avatar>
                    </v-list-item-avatar>

                    <v-list-item-content>
                      <v-list-item-title>
                        <router-link
                          :to="{
                            name: 'book-details',
                            params: { isbn: book.isbn },
                          }"
                        >
                          {{ book.name }}
                        </router-link>
                      </v-list-item-title>

                      <v-list-item-subtitle>
                        {{ book.author }}
                      </v-list-item-subtitle>
                      <v-list-item-subtitle>
                        {{ book.date }}
                      </v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>

                  <!--      <v-divider
                    v-if="n !== 6"
                    :key="`divider-${n}`"
                    inset
                  ></v-divider> -->
                </template>
              </v-list>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Service from "../services/index.js";
import store from "@/localStorage";

export default {
  name: "HomeView",
  data() {
    return {
      store,
    };
  },
  mounted() {
    let bookNum = 10;
    this.transformData(bookNum, this.store.limiter);
  },
  methods: {
    async transformData(bookNum, limiter) {
      if (limiter) {
        let data = await this.getData(bookNum);
        for (let d of data) {
          let temp = {
            isbn: d.isbn,
            name: d.name,
            author: d.authors[0],
            date: new Date(d.released).toDateString(),
            pageNum: d.numberOfPages,
            publisher: d.publisher,
            country: d.country,
            charNum: d.characters.length,
          };
          this.store.books.push(temp);
        }
        this.store.limiter = 0;
      } else return;
    },
    async getData(bookNum) {
      let resp = await Service.getGlobal(bookNum);
      return resp;
    },
  },
};
</script>
