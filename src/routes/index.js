import Login from "./../pages/Login.vue"
import Home from "./../pages/Home.vue"


export default [
    { path: "/login", component: Login, meta: {esconderNavbar: true} },
    { path: "/home", component: Home }
]