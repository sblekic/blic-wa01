<template>
  <v-app>
    <v-app-bar dark color="grey darken-4" elevation="4">
      <!-- <v-icon>{{ icons.mdiGithub }}</v-icon> -->
      <!-- refer to vuetify spacing -->
      <div class="mx-2"></div>
      <v-toolbar-title> GoT knjige</v-toolbar-title>
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
// import { mdiGithub } from "@mdi/js";
export default {
  name: "App",
  data() {
    return {
      icons: {
        // mdiGithub,
      },
    };
  },
};
</script>
