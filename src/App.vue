<template>
  <v-app>
    <app-navbar v-if="!this.$route.meta.esconderNavbar"></app-navbar>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script setup>
import AppNavbar from "./components/App-Navbar.vue"

</script>

<script>
export default {
  name: 'App',
  data: () => ({
    //
  }),
}
</script>
