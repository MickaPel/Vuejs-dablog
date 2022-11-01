<template>
  <main class="relative">
    <!--Message de succès
    <div class="flex justify-between items-center bg-emerald-500 w-1/5 p-5"></div>
    -->
    <!-- Intro -->

    <div class="my-10 lg:flex justify-between items-center block">
      <div>
        <h2 class="text-5xl font-semibold mb-2">Tous les articles</h2>
        <div class="h-1 w-60 bg-indigo-500 rounded"></div>
      </div>

      <button
        class="
          text-xl
          py-3
          px-5
          bg-indigo-500
          mt-5
          font-semibold
          text-white
          mb-7
          lg:mt-0
          mt-3
        "
      >
        Ajouter un article
      </button>
    </div>

    <div class="w-full max-w-xs">
      <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div class="mb-4">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="username"
          >
            Titre
          </label>
          <input
            v-model="newPost.title"
            class="
              shadow
              appearance-none
              border
              rounded
              w-full
              py-2
              px-3
              text-gray-700
              leading-tight
              focus:outline-none focus:shadow-outline
            "
            type="text"
            placeholder="Titre"
          />
        </div>
        <div class="mb-6">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="password"
          >
            Author
          </label>
          <input
            v-model="newPost.author"
            class="
              shadow
              appearance-none
              border
              rounded
              w-full
              py-2
              px-3
              text-gray-700
              leading-tight
              focus:outline-none focus:shadow-outline
            "
            type="text"
            placeholder="Author"
          />
        </div>
        <div class="mb-6">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="password"
          >
            Date
          </label>
          <input
            v-model="newPost.date"
            class="
              shadow
              appearance-none
              border
              rounded
              w-full
              py-2
              px-3
              text-gray-700
              leading-tight
              focus:outline-none focus:shadow-outline
            "
            type="text"
            placeholder="Date"
          />
        </div>
        <div class="mb-6">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="password"
          >
            Image
          </label>
          <input
            v-model="newPost.image"
            class="
              shadow
              appearance-none
              border
              rounded
              w-full
              py-2
              px-3
              text-gray-700
              leading-tight
              focus:outline-none focus:shadow-outline
            "
            type="text"
            placeholder="Image"
          />
        </div>
        <div class="mb-6">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="password"
          >
            Categorie
          </label>
          <select
            class="text-slate-900"
            v-model="newPost.category"
            @click="getNumberOfPostsByCategory()"
          >
            <option value="" selected disabled default>
              Selectionner une categorie
            </option>
            <option value="Programmning">Programmation</option>
            <option value="Design">Design</option>
            <option value="Politics">Politique</option>
            <option value="Cuisine">Cuisine</option>
          </select>
        </div>
        <div class="mb-6">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="password"
          >
            Contenu
          </label>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Contenu"
            v-model="newPost.content"
          ></textarea>
        </div>
        <ul>
          <li
            class="text-red-500"
            v-for="(error, index) of listError"
            :key="index"
          >
            {{ error }}
          </li>
        </ul>

        <div class="flex items-center justify-between">
          <button
            @click="addPost"
            class="
              bg-blue-500
              hover:bg-blue-700
              text-white
              font-bold
              py-2
              px-4
              rounded
              focus:outline-none focus:shadow-outline
            "
            type="button"
          >
            Valider
          </button>
        </div>
        <Spinner v-show="showSpinner" />
        <span
          style="background-color: green"
          class="popuptext"
          id="myPopup"
          v-show="showPopup"
          >Post ajouté avec succes</span
        >
      </form>
    </div>

    <!--Formulaire de recherche-->
    <form>
      <div>
        <!--Recherche par titre et description-->
        <input
          class="
            text-slate-900
            p-3
            focus:outline-none focus:border-indigo-500
            mt-4
            border-b-4 border-slate-900
            lg:w-1/2
            text-lg
            w-full
          "
          type="search"
          placeholder="Taper votre recherche.."
          v-model="search"
          @input="getNumberOfPosts()"
        />
        <!--Recherche par catégorie-->
        <select
          class="
            text-slate-900
            p-3
            focus:outline-none focus:border-indigo-500
            mt-4
            border-b-4 border-slate-900
            lg:w-1/2
            w-full
            text-lg
          "
          v-model="option"
          @click="getNumberOfPostsByCategory()"
        >
          <option value="" selected disabled default>
            Selectionner une categorie
          </option>
          <option value="Programmning">Programmation</option>
          <option value="Design">Design</option>
          <option value="Politics">Politique</option>
          <option value="Cuisine">Cuisine</option>
        </select>
      </div>
    </form>
    <!--Resultat-->
    <p class="text-lg font-semibold text-center my-2">
      Resultat <span class="text-indigo-500">{{ searchNbrResults }}</span>
    </p>

    <!--Grille des articles-->
    <div
      v-if="resultQuery.length == 0"
      class="my-20 gap-7 sm:grid md:grid-cols-2 xl:grid-cols-4"
    >
      <!--Article-->
      <p>Pas de résultats</p>
    </div>
    <div
      v-else-if="resultFilter.length == 0"
      class="my-20 gap-7 sm:grid md:grid-cols-2 xl:grid-cols-4"
    >
      <!--Article-->
      <Post v-for="(post, index) of resultQuery" :key="index" :post="post" />
    </div>
    <div v-else class="my-20 gap-7 sm:grid md:grid-cols-2 xl:grid-cols-4">
      <!--Article-->
      <Post v-for="(post, index) of resultFilter" :key="index" :post="post" />
    </div>
  </main>
</template>
<script>
import { posts } from "../data";
import Post from "../components/Post.vue";
import Spinner from "../components/Spinner.vue";

export default {
  name: "Blog",
  components: {
    Post,
    Spinner,
  },
  data() {
    return {
      posts,
      value: "",
      search: null,
      searchNbrResults: 0,
      option: "",
      listError: [],
      listPosts: posts,
      newPost: {
        title: undefined,
        category: undefined,
        author: undefined,
        date: undefined,
        content: undefined,
        image: undefined,
      },
      showSpinner: false,
      showPopup: false,
    };
  },
  computed: {
    resultQuery() {
      if (this.search) {
        return this.posts.filter((item) => {
          var columns = item.title + item.content;
          return this.search
            .toLowerCase()
            .split(" ")
            .every((v) => columns.toLowerCase().includes(v));
        });
      } else {
        return this.posts;
      }
    },
    resultFilter() {
      return this.posts.filter((item) => item.category === this.option);
    },
  },
  methods: {
    getNumberOfPosts() {
      return (this.searchNbrResults = this.resultQuery.length);
    },
    getNumberOfPostsByCategory() {
      return (this.searchNbrResults = this.resultFilter.length);
    },
    addPost(event) {
      event.preventDefault();

      // on vide la liste d'erreur pour eviter qu'elles s'accumulent
      this.listError = [];
      // Verification du formulaire -> on verifie si mes champs sont pas null
      if (
        this.newPost.title &&
        this.newPost.category &&
        this.newPost.date &&
        this.newPost.author &&
        this.newPost.content &&
        this.newPost.image
      ) {
        // ajout dans ma liste des user
        let obj = Object.assign({}, this.newPost);
        this.posts.push(obj);
        // apres l'ajout de mon utilisateur je remet mes champs à vide
        this.newPost.title = "";
        this.newPost.category = "";
        this.newPost.date = "";
        this.newPost.author = "";
        this.newPost.content = "";
        this.showSpinner = true;
        setTimeout(() => {
          return (this.showSpinner = false);
        }, 3000);
        setTimeout(() => {
          return alert("Article ajouté avec succes");
        }, 3000);
      } else {
        // message d'erreur si mes champs ne sont pas remplis
        this.listError.push("Les champs ne sont pas remplis");
      }
    },
  },
};
</script>
<style>
</style>