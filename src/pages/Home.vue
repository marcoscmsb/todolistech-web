<template>
  <v-container>
    <v-row class="mt-8">
      <h1>Seja Bem Vindo</h1>
    </v-row>
    <v-row class="mt-16">
      <v-col cols="12">
        <v-card>
          <v-table>
            <thead>
              <th>Descrição</th>
              <th>Data Previsão</th>
              <th>Concluido</th>
            </thead>
            <tbody>
              <tr v-for="item in tarefas" :key="item._id">
                <td>{{ item.descricao }}</td>
                <td>{{ formatarData(item.dataPrevisao) }}</td>
                <td>{{ item.concluido ? "Sim" : "Não"}}</td>
              </tr>
            </tbody>
          </v-table>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import TarefaService from "./../service/TarefaService";
import moment from "moment"

export default {
  data: () => {
    return {
      tarefas: [],
    };
  },
  methods: {
    async listarTarefas() {
      try {
        this.tarefas = await TarefaService.buscarTodos();
      } catch (error) {
        alert(error.message);
        console.log(error);
      }
    },
    formatarData(data) {
        return moment(data).format("DD/MM/YYYY")
    }
  },
  mounted() {
    this.listarTarefas();
  },
};
</script>
