<template>
    <div class="w-full">
    <div class="max-w-5xl mx-auto px-6 sm:px-6 lg:px-8 mb-12">
        <div class="bg-indigo-100 w-full shadow shadow-lg p-8 sm:p-12">
                <p class="text-3xl font-bold leading-7 text-center text-slate-800 mb-4">Nous contacter</p>
        
            <form>
                <div class="md:flex items-center mt-12">
                    <div class="w-full md:w-1/2 flex flex-col">
                        <label class="font-semibold leading-none text-lg">Nom <sup class="text-red-700">*</sup></label>
                        <input 
                        v-model="contactInfos.name"
                        type="text" 
                        class="leading-none bg-indigo-100 text-slate-900 p-3 focus:outline-none focus:border-indigo-500 mt-4 border-b-2 border-slate-900" />
                    </div>
                    <div class="w-full md:w-1/2 flex flex-col md:ml-6 md:mt-0 mt-4">
                        <label class="font-semibold leading-none text-lg">Téléphone</label>
                        <input
                        v-model="contactInfos.telephone"
                         type="email" 
                         class="leading-none bg-indigo-100 text-slate-900 p-3 focus:outline-none focus:border-indigo-500 mt-4 border-b-2 border-slate-900" />
                    </div>
                </div>
                <div class="md:flex items-center mt-8">
                    <div class="w-full flex flex-col">
                        <label class="font-semibold leading-none text-lg">Sujet <sup class="text-red-700">*</sup></label>
                        <input 
                        v-model="contactInfos.sujet"
                        type="text" 
                        class="leading-none bg-indigo-100 text-slate-900 p-3 focus:outline-none focus:border-indigo-500 mt-4 border-b-2 border-slate-900" />
                    </div>
                    
                </div>
                <div>
                    <div class="w-full flex flex-col mt-8">
                        <label class="font-semibold leading-none text-lg">Message <sup class="text-red-700">*</sup></label>
                        <textarea 
                        v-model="contactInfos.message"
                         type="text"
                         class="h-40 text-base leading-none bg-indigo-100 text-slate-900 p-3 focus:outline-none focus:border-indigo-500 mt-4 border-b-2 border-slate-900"></textarea>
                    </div>
                </div>
                
                <div class="flex flex-col items-center justify-center w-full">
                    <ul>
                        <li
                            class="text-red-500"
                            v-for="(error, index) of listErrors"
                            :key="index"
                        >
                            {{ error }}
                        </li>
                    </ul>
                    <button 
                    @click="sendMessage"
                    class="mt-9 font-semibold leading-none text-white py-4 px-10 bg-indigo-500 hover:bg-blue-600">
                        Envoyer !
                    </button>
                    <Spinner v-show="showSpinner" />
                </div>
            </form>
        </div>
    </div>
</div>
</template>
<script>

import Spinner from "../components/Spinner.vue";
export default {
    name: 'Contact',
    components: {
        Spinner
    },
    data() {
        return {
            contactMessage: [],
            contactInfos: {
                name: undefined,
                telephone: undefined,
                sujet: undefined,
                message: undefined,
            },
            listErrors: [],
            showSpinner: false,
        }
    },
    methods: {
        sendMessage(event) {
            event.preventDefault();
            this.listErrors = [];
            if (
                this.contactInfos.name &&
                this.contactInfos.sujet &&
                this.contactInfos.message
            ) {
                let obj = Object.assign({}, this.contactInfos);
                this.contactMessage.push(obj);
                this.contactInfos.name = "";
                this.contactInfos.sujet = "";
                this.contactInfos.message = "";
                this.showSpinner = true;
                setTimeout(() => {
                    return (this.showSpinner = false);
                }, 1000);
                setTimeout(() => {
                    return alert("Message envoyé");
                }, 500);
            } else {
                this.listErrors.push("Les champs ne sont pas remplis");
            }
        }
    },
    
}
</script>
<style lang="">
    
</style>