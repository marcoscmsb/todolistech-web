import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL

export default class TarefaSercice {
    static async buscarTodos(){
        try {
           const resposta = await axios.get(`${API_URL}/tarefa/`)
           return resposta.data
        } catch (error) {
            throw error.response ? error.response.data : error
        }
    }
}