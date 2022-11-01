<template>
    <div class="flex w-96 flex-col justify-center bg-white shadow-lg shadow-slate-300/60" @click="goToPost(post.id)">
        <img :src="post.image" alt="img" class="aspect-video w-96 object-cover object-center">
        <h2 class="text-xl font-medium text-slate-600 pb-2 my-1">{{post.title}}</h2>
        <h3 class="text-indigo-500 text-lg">{{post.category}}</h3>
        <!-- <p v-if="post.content.length<150" class="text-sm tracking-tight font-light text-slate-600 leading-6">{{post.content}}</p>
        <p v-else class="text-sm tracking-tight font-light text-slate-600 leading-6">{{post.content.substring(0,150)+".." }}</p> -->
        <p 
        class="text-sm tracking-tight font-light text-slate-600 leading-6">
        {{ post.content | truncate2(150) }}
        </p>
    </div>
</template>
<script>
export default {
    name: "Post",
    props: ["post"],
    methods: {
        goToPost(id) {
            this.$router.push(`/posts/${id}`)
        }
    },
    filters: {
        //solution 1
        truncate(value, nombre) {
            if (!value) {
                return null
            } else {
                value = value.split("").slice(0, nombre).join("")
                return value + "..."
            }
        },
        //solution 2
        truncate2(value, nombre) {
            if (!value) {
                return null
            } if(value.length > nombre) {
                    return value.slice(0, nombre - 4) + "..."
                } else {
                    return value
                }
            }
        }
    }
    
</script>
<style>
    
</style>