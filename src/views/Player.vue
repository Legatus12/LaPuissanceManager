<template>
    <div class="page">
        <p v-for="season in seasons">{{ season.id }}</p>
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

</style>