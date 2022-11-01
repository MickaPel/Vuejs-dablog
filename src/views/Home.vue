<template>
    <div>
        <!-- Presentatio du site -->
        <section class="my-20 lg:flex block gap-10 items-center">
            <div class="w-full lg:w-1/2">
              <h1 class="text-5xl font-bold mb-5">Restez Informer avec DaBlog</h1>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam enim velit itaque placeat totam voluptatibus sunt quasi excepturi culpa, aut amet laborum maxime, deserunt fugit laboriosam fuga minus quia delectus. 
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias deserunt itaque autem nisi maxime tempore qui mollitia! Reprehenderit perferendis 
                inventore placeat illum aperiam ratione ipsam officiis, magni modi est voluptatem.</p>
                <button class="text-xl py-3 px-5 bg-indigo-500 mt-5 font-semibold text-white mb-7 lg:mb-0" >
                    <router-link to="contact">Nous contacter</router-link>
                </button>
            </div>
            <div class="w-full lg:w-1/2">
            <img src="https://mediablog.cdnpk.net/sites/9/2021/12/N4X8jH0f-1570x820-2-min.png" alt="">
            </div>
        </section>
        <!-- Statistiques -->
        <section class="my-20">
            <div>
                <h2 class='text-2xl font-semibold mb-2'>Quelques chiffres</h2>
                <div class="h-1 w-40 bg-indigo-500 rounded"></div>
            </div>
            <div class="my-10 gap-5 sm:grid md:grid-cols-2 xl:grid-cols-3">
                <!-- carte Statistiques -->
                <Stat v-for="(stat, index) of articles" 
                    :key='index' 
                    :stat="stat" />
                
            </div>
        </section>
        <!-- Les derniers articles -->
        <section>
            <div>
                <h2 class='text-2xl font-semibold mb-2'>Derniers articles</h2>
                <div class="h-1 w-40 bg-indigo-500 rounded"></div>
            </div>
            <div class="my-10 gap-7 sm:grid md:grid-cols-2 xl:grid-cols-4">
                <!-- mes cartes articles -->
                <Post v-for="(post, index) of the4latestPosts" 
                    :key='index' 
                    :post="post" />
            </div>
        </section>
        
    </div>
</template>
<script>

import Stat from "../components/Stat.vue";
import Post from "../components/Post.vue";
import {posts} from "../data"

export default {
    name: 'Home',
    components: {
        Stat,
        Post
    },
    data() {
        return {
            posts,
            articles: [
                {title: '1', subTitle: "Site francophone", description:"Le premier site francophone"},
                {title: '100', subTitle: "Articles", description:"lorzoedjzoiedjpzoekdpaokdpoakzedpzod"},
                {title: '1400', subTitle: "References", description:"lorzoedjzoiedjpzoekdpaokdpoakzedpzod"},
            ],
            // postsLimited : [],
        }
    },
    //pour debugger des elements que je ne connais pas je peux utiliser le cycle de vie
    // mounted() {
    //     console.table(this.the4latestPosts);
    // },
    computed: {
                the4latestPosts() {
                    return posts.sort((a,b) => b.id - a.id).slice(0,4);
                },
                // theDesignPost() {
                //     return posts.filter(item => item.category === 'Design')
                // }
    }
}
</script>
<style>
    
</style>