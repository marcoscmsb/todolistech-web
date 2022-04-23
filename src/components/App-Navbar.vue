<template>
  <v-app-bar color="light-blue-darken-3" class="pr-10">
    <template v-slot:prepend>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
    </template>
    <v-app-bar-title>Todolistech</v-app-bar-title>

    <template v-slot:append>
      <v-btn @click="sair()">Sair</v-btn>
    </template>
  </v-app-bar>
</template>

<script>
import AuthService from './../service/AuthService'
export default {
  methods: {
    sair() {
      AuthService.removerToken()
      this.$router.push("/login")
    }
  }
}
</script>
