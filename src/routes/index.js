import Login from "./../pages/Login.vue"
import Home from "./../pages/Home.vue"


export default [
    { path: "/login", name:"Login", component: Login, meta: {esconderNavbar: true} },
    { path: "/home", name:"Home", component: Home }
]