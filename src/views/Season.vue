<template>
    <div class="page">
        <h1>season_id:</h1>
        <h2>{{ route.query.season }}</h2>
        <br>
        <div class="stats-container">
            <div class="stat">
                <span>PJ</span>
                <button @click="updatePlayerStat({ gp: stats.gp + 1 })">+</button>
                <p>{{ stats.gp }}</p>
                <button @click="stats.gp > 0 ? updatePlayerStat({ gp: stats.gp - 1 }) : 0">-</button>
            </div>
            <div class="stat">
                <span>MVP</span>
                <button @click="updatePlayerStat({ mvp: stats.mvp + 1 })">+</button>
                <p>{{ stats.mvp }}</p>
                <button @click="stats.mvp > 0 ? updatePlayerStat({ mvp: stats.mvp - 1 }) : 0">-</button>
            </div>
            <br>
            <div class="stat">
                <span>G</span>
                <button @click="updatePlayerStat({ g: stats.g + 1 })">+</button>
                <p>{{ stats.g }}</p>
                <button @click="stats.g > 0 ? updatePlayerStat({ g: stats.g - 1 }) : 0">-</button>
            </div>
            <div class="stat">
                <span>A</span>
                <button @click="updatePlayerStat({ a: stats.a + 1 })">+</button>
                <p>{{ stats.a }}</p>
                <button @click="stats.a > 0 ? updatePlayerStat({ a: stats.a - 1 }) : 0">-</button>
            </div>
            <br>
            <div class="stat">
                <span>TA</span>
                <button @click="updatePlayerStat({ yc: stats.yc + 1 })">+</button>
                <p>{{ stats.yc }}</p>
                <button @click="stats.yc > 0 ? updatePlayerStat({ yc: stats.yc - 1 }) : 0">-</button>
            </div>
            <div class="stat">
                <span>TR</span>
                <button @click="updatePlayerStat({ rc: stats.rc + 1 })">+</button>
                <p>{{ stats.rc }}</p>
                <button @click="stats.rc > 0 ? updatePlayerStat({ rc: stats.rc - 1 }) : 0">-</button>
            </div>
        </div>
    </div>
</template>


<script setup>

import { ref, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { getPlayerStats, updateStat } from '@/firebase'

//

const router = useRouter()
const route = useRoute()

//

const stats = ref({})

const updatePlayerStat = (update) => updateStat(route.params.id, route.query.season, update)

onMounted(() => getPlayerStats(route.params.id, route.query.season, doc => stats.value = doc.data()))

</script>


<style scoped>

h1 { @apply text-xl text-[#646464] italic }
h2 { @apply text-3xl text-[#646464] }
.stats-container { @apply w-full h-full flex flex-col gap-8 items-center justify-center overflow-y-auto p-4 border-solid border-[#f6f6f6] border-t-2 }
    .stat { @apply flex items-center gap-4 text-2xl font-black }
        .stat span { @apply text-base w-12 } 
        .stat button { @apply w-8 bg-[#f6f6f6] text-[#232323] hover:bg-[#d6d6d6] font-black }
        .stat p { @apply w-8 text-center }

</style>