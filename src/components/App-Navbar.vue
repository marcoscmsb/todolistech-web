<template>
  <v-app-bar color="light-blue-darken-3" class="pr-10">
    <template v-slot:prepend>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
    </template>
    <v-app-bar-title>Todolistech</v-app-bar-title>

    <template v-slot:append>
       <router-link to="/home" class="text-decoration-none text-white">
      <v-btn>Home</v-btn>
      </router-link>
      <router-link to="/login" class="text-decoration-none text-white">
      <v-btn>Login</v-btn>
      </router-link>
    </template>
  </v-app-bar>
</template>
