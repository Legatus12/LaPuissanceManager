<template>
    <div class="page">
        <div class="main">
            <input type="password" v-model="password" placeholder="password">
            <button @click="logIn()">log in</button>
        </div>
    </div>
</template>


<script setup>

import { ref } from "vue"
import { useRouter } from "vue-router"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"

//

const router = useRouter()

//

const password = ref('')

const logIn = () => {
    signInWithEmailAndPassword(getAuth(), 'lapuissancefc@gmail.com', password.value)
    .then(() => router.push({ name: 'squad' }))
    .catch(error => console.log(error))
}

</script>


<style scoped>

.main { @apply w-full h-full flex flex-col gap-8 items-center justify-center }
input { @apply bg-transparent p-2 border-solid border-b-2 border-[#f6f6f6] focus:outline-none }
button { @apply text-2xl bg-[#f6f6f6] text-[#232323] hover:bg-[#d6d6d6] p-2 font-black }

</style>