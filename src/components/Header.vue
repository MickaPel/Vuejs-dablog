<template>
    <!--Pour le sementique HTML on declare un barre de navigation avec la balise header-->
    <header class="p-6 border-b-2 border-slate-900 text-slate-900">
        <div class="container mx-auto block lg:flex justify-between items-center">
            <!--Titre de mon site-->
            <h3 class="font-bold text-2xl text-center">{{titre}}</h3>
            <!--Liste des liens -->
            <nav>
                <ul class="flex gap-10">

                    <!-- solution 1 -->

                    <MenuHeader v-for="(link, index) of links" :key='index' :href="link.href" :nomDuLien="link.nomDuLien" />

                    <!-- SOLUTION 2 -->

                    <!-- <MenuHeader href="/posts" nomDuLien="Nos Articles" /> -->
                    <MenuHeader :href="`/about/${myParam}/${myParam2}`" nomDuLien="A propos" />
                    <!-- <MenuHeader href='/contact' nomDuLien="Contact" /> -->

                    
                    <!-- SOULTION 3 -->

                    <!-- <li class="text-lg">
                        <router-link to='/' class-active="active" exact>Accueil</router-link>
                    </li>
                    <li class="text-lg">
                        <router-link to='/posts' class-active="active" exact>Nos Articles</router-link>
                    </li>
                    <li class="text-lg">
                        <router-link :to="`/about/${myParam}/${myParam2}`" class-active="active" exact>A propos</router-link>
                    </li>
                    <li class="text-lg">
                        <router-link to='/contact' class-active="active" exact>Contact</router-link>
                    </li> -->

                    <li class="text-lg">
                        <router-link to="/todo" class-active="active" exact>
                            TodoVuex
                        </router-link>
                    </li>

                </ul>
            </nav>

        </div>

    </header>
</template>
<script>

import MenuHeader from './MenuHeader.vue';

export default {
    name: 'Header',
    components: {
        MenuHeader
    },
    data() {
        return {
            links: [
                {href: '/', nomDuLien: "Acceuil"},
                {href: '/posts', nomDuLien: "Nos articles"},
                {href: '/contact', nomDuLien: "Contact"},
            ],
            myParam: 'param1',
            myParam2: "param2",
        }
    },
    props: {
        titre: {
            type: String,
            default: "Dawan" // on d??finis une valeur par d??faut si elle n'est pas renseign?? par le parent
        }
    },
}
</script>
<style>
    .router-link-active {
        border-bottom: 3px solid #3f51b5;
        color: #3f51b5;
        font-weight: 600;
    }
</style>