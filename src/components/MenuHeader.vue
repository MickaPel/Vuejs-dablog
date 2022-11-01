<template>
        <li class="text-lg">
            <router-link :to='href' class-active="active" exact>{{nomDuLien}}</router-link>
        </li>
</template>
<script>
export default {
    name: 'MenuHeader',
    props: ["href", "nomDuLien"]
}
</script>
<style>
    
</style>