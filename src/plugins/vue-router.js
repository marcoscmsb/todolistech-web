import { createRouter, createWebHistory } from "vue-router"
import routes from "./../routes"
import AuthService from "./../service/AuthService"

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach(async (to, from, next) => {
    if(to.name == "Login") next()
    else {
        const tokenValido = await AuthService.validaToken()
        if(tokenValido) next()
        else router.push("/login")

    
    }
    
})



export default router