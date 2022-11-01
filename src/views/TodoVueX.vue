<template>
    <div>
        <h1 class='text-5xl font-bold my-7'>TodoList avec <span class="text-indigo-500">Vue</span></h1>
        <main class="bg-slate-200 p-4 w-1/2">
            <!-- formulaire -->
            <form @submit.prevent='addTodo'>
                <input class="text-slate-900 p-3 focus:outline-one focus:border-indigo-500 " type="text" v-model="newTodo">
                <button type="submit">ajouter</button>
            </form>
            <!-- liste todos -->
            <div v-for="todo in allTodos" :key="todo.id" class="flex gap-5">
                <p>{{todo.title}}</p>
                <button @click.prevent="deleteTodo(todo)">X</button>
            </div>
        </main>
    </div>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
    name: "TodoVueX",
    data() {
        return {
            newTodo: ''
        }
    },
    methods: {
        addTodo() {
            this.$store.dispatch("addTodo", this.newTodo)
            this.newTodo = ''
        },
        deleteTodo(todo) {
            this.$store.dispatch('deleteTodo', todo)
        },
    },
    mounted() {
        this.$store.dispatch('loadTodos')
    },
    computed: {
        ...mapGetters(["allTodos"]),
    }
}
</script>
<style>
    
</style>