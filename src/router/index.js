import Vue from 'vue';
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Contact from "../views/Contact.vue";
import Blog from "../views/Blog.vue";
import NotFound from "../views/NotFound.vue"
import PostDetails from "../views/PostDetails.vue"
import TodoVueX from "../views/TodoVueX.vue"

//indique a vuejs qu'il peut utiliser le router partout
Vue.use(VueRouter);
const routes = [
    //page d'acceuil par defaut
    {path: '/', name: 'Home', component: Home},
    {path: '/posts', name:'Blog', component: Blog},
    {path: '/about/:titre1/:titre2', name:'About', component: About},
    {path: '/posts/:id', name:'PostDetails', component: PostDetails},
    {path: '/contact', name:'Contact', component: Contact},
    {path: '/todo', name:'TodoVueX', component: TodoVueX},
    {path: '*', name:'NotFound', component: NotFound}
]

//
const router = new VueRouter({
    mode:'history',
    //tableau d'objets contenant chacune de mes vues
    routes
})

export default router;