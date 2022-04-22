<template>
  <v-container>
    <v-row>
      <v-col cols="4" offset="4">
        <v-form class="mt-16">
          <v-card variant="outlined" class="pa-10">
            <v-card-title>Entrar</v-card-title>
            <v-card-text>
              <v-text-field
                label="E-mail"
                type="email"
                variant="outlined"
                v-model="usuario.email"
              ></v-text-field>
              <v-text-field
                label="Senha"
                type="password"
                variant="outlined"
                v-model="usuario.senha"
              ></v-text-field>
            </v-card-text>
            <v-card-actions justify="end">
              <v-btn color="error" variant="text" class="mx-10">Cancelar</v-btn>
              <v-btn @click="fazerLogin()" color="success" elevation="0"
                >Entrar</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import AuthService from "./../service/AuthService";
export default {
  data: () => {
    return {
      usuario: {},
    };
  },
  methods: {
    async fazerLoginn() {
      try {
        const resultado = await AuthService.login(this.usuario);
      } catch (error) {
        alert(error.message);
      }
    },
  },
};
</script>
