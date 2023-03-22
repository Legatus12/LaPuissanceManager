<template>
    <div class="page">
        <h1>player_id:</h1>
        <h2>{{ route.params.id }}</h2>
        <br>
        <div class="season-container">
            <p class="season" v-for="season in seasons" @click="router.push({ name: 'season', params: { id: route.params.id }, query: { season: season.id } })">{{ season.id }}</p>
        </div>
    </div>
</template>


<script setup>

import { ref, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { getSeasonsPlayed } from '@/firebase'

//

const router = useRouter()
const route = useRoute()

//

const seasons = ref([])

onMounted(() => getSeasonsPlayed(route.params.id, (docs) => docs.forEach(doc => seasons.value.push({ ...doc.data(), id: doc.id }))))


</script>


<style scoped>

h1 { @apply text-xl text-[#646464] italic }
h2 { @apply text-3xl text-[#646464] }
.season-container { @apply overflow-y-auto p-4 border-solid border-[#f6f6f6] border-t-2 }
    .season { @apply p-2 text-2xl hover:bg-[#424242] cursor-pointer }

</style>