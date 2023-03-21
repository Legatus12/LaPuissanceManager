<template>
    <div class="page">
        <h1 class="title">Stats Manager</h1>
        <br>
        <div class="player-container">
            <div class="player" v-for="player in squad" @click="router.push({ name: 'player', params: { id: player.id }})">
                <p class="text-[#f1121f] font-bold">{{ player.number }}</p>
                <p>{{ player.nickname }}</p>
            </div>
        </div>
    </div>
</template>


<script setup>

import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { getPlayers } from '@/firebase'

//

const router = useRouter()

//

const squad = ref([])

onMounted(() => getPlayers((docs) => docs.forEach(doc => squad.value.push({ ...doc.data(), id: doc.id }))))

</script>


<style scoped>

.title { @apply text-3xl font-black }
.player-container { @apply overflow-y-auto p-4 border-solid border-[#f6f6f6] border-t-2 }
    .player { @apply flex p-2 text-2xl gap-4 hover:bg-[#424242] cursor-pointer }

</style>