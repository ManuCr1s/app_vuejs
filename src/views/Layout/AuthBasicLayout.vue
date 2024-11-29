<template>
  <v-app>
    <v-main class="auth-pages">
      <div
        class="position-relative min-vh-100"
        :style="`background-image:  url(${require('@/assets/img/fondo_app.jpg')}); background-size: cover; background-position: 50%;`"
      >
        <span class="mask bg-gradient-default opacity-6"></span>
        <v-container class="my-auto">
          <v-row class="min-vh-100">
            <fade-transition :duration="200" origin="center top" mode="out-in">
              <!-- your content here -->
              <v-container class="pb-0 position-relative">
                <router-view></router-view>
              </v-container>
            </fade-transition>
          </v-row>
        </v-container>
      </div>
    </v-main>
  </v-app>
</template>
<script>
import { FadeTransition } from "vue2-transitions";

export default {
  name: "page-layout",
  components: {
    FadeTransition,
  },
  data() {
    return {
      paragraphs: "",
      tab: null,
    };
  },
  methods: {
    headerTitle() {
      switch (this.$route.name) {
        case "SignUpBasic":
          this.paragraphs =
            "Use these awesome forms to login or create new account in your project for free.";
          return "Welcome!";
        default:
          break;
      }
    },
  },
};
</script>
