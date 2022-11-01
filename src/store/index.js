import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
    state: { //contient l'ensemble des propriétés -> data
        posts: [],
        todos: [],
    }, 
    getters: { //proprietes calculés => computed
        allTodos(state) {
            return state.todos;
        },
        postPublic(state) {
            return state.posts.filter((post) => post.isPublic)
        }
    }, 
    mutations: { //permet de modifier mon state
        SET_POST(state, posts) {
            console.log(posts)
            state.posts = posts
        },
        SET_TODOS(state, todo) {
            console.log(todo)
            state.todos = todo
        },
        ADD_TODOS(state, todo) {
            state.todos.push(todo)
        },
        DELETE_TODO(state, todo) {
            let todos = state.todos
            todos.splice(todos.indexOf(todo), 1)
        },
    }, 
    actions: { //permet d'effectuer de la logique dans mon code => methods
        addTodo({commit}, title) {
            const newTodo = {
                userId: 1,
                id: Math.floor(Math.random() * 100),
                title: title,
                completed : false
            }
            commit("ADD_TODOS", newTodo)
        },
        deleteTodo({commit}, todo) {
            commit("DELETE_TODO", todo)
        },
        async loadPost({commit}) {
            await axios.get("https://jsonplaceholder.typicode.com/posts?_page=1&_limit=10")
                        .then((response) => {
                            commit("SET_POST", response.data)
                        })
        },
        async loadTodos({commit}) {
            await axios.get("https://jsonplaceholder.typicode.com/todos?_page=1&_limit=10")
                        .then((response) => {
                            commit("SET_TODOS", response.data)
                        })
        }
    } 
})

export default store;