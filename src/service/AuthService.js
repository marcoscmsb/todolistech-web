import axios from "axios"

const API_URL = import.meta.env.VITE_API_URL

export default  class AuthService {

   static async  login(usuario) {
       try { 
        const resposta = await axios.post(`${API_URL}/auth`, usuario)
        AuthService.armazenarToken(resposta.data.token)
        
       } catch (error) {
           throw error.response ? error.response.data : error
       }
     }
     static async validaToken() {
         try {
             const token = AuthService.pegarToken()
              await axios.get(`${API_URL}/auth/${token}`)
             return true
         } catch (error) {
             return false
         }
     }

     static armazenarToken(token) {
         localStorage.setItem("token", token)
     }


     static pegarToken() {
         return localStorage.getItem("token")
     }
     static removerToken() {
         localStorage.removeItem("token")
     }
}