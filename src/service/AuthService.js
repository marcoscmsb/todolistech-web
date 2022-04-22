import axios from "axios"

export default  class AuthService {

   static async  login(usuario) {
       try {
        
        const resposta = await axios.post(`${import.meta.env.VITE_API_URL}/auth`, usuario)
        this.$router.push("/home")
       } catch (error) {
           throw error.response.data 
       }
     }
}