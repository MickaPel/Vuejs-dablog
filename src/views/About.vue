<template>
    <div>
        <h1>About</h1>
        <p>{{param}}</p>
        <p>{{param2}}</p>
        <h2 v-show="post" 
            v-for="post in posts" 
            :key="post.id">
                {{post.title}}
        </h2>

        <h3 class="text-xl font-bold">Ajouter article</h3>
        <input type="text" v-model="title">
        <input type="text" v-model="body">
        <button @click="addPost">Ajouter</button>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    name: 'About',
    mounted() {
        //this.getPosts();
        console.log(this.posts)
        this.$store.dispatch("loadPost")
    },
    methods: {
            async addPost() {
                const newPost = {
                    userId: 1,
                    id: 101,
                    title: this.title,
                    body: this.body
                }
                await axios.post("https://jsonplaceholder.typicode.com/posts", newPost).then((response) => {
                    this.posts.push(response.data)
                }).catch((e) => {
                    console.log(e)
                })
            },
            async getPosts() {
                //methode async est une méthode qui ne bloquera l'éxecution de mon script
                //elle s'execute en arriere plan
                await axios.get("https://jsonplaceholder.typicode.com/posts?_page=1&_limit=10")
                .then((response) => {
                    this.posts = response.data;
                    console.log(this.posts)
                }).catch((e) => {
                    console.log(e)
                })
            }
        
    },
    data() {
        return {
            //posts: [],
            title: "",
            body: ""
        }
    },
    computed: {
        posts() {
            return this.$store.state.posts;
        },
        param() {
            //destructuration
            const {titre1} = this.$route.params;
            return titre1;
        },
        param2(){
            const {titre2} = this.$route.params;
            return titre2;
        }
    }
}
</script>
<style>
    
</style>