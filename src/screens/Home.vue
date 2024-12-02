<template>
    <div class="container d-flex flex-column justify-content-start align-items-center main-content mt-5">
        <p class="fs-1">Entropic Electors</p>
        <UsMap/>
    </div>
</template>

<script setup lang="ts">
import UsMap from '@/components/UsMap.vue';
import { ref, onMounted } from 'vue';
import { States } from '@/utils/states';

const states = ref(States);

onMounted(() => {
    Object.keys(states.value).forEach(stateCode => {
        const stateElement = document.getElementById(stateCode);
        console.log(`looking at element with id ${stateCode}`);
        if (stateElement) {
                States[stateCode].democratPercent > States[stateCode].republicanPercent ? stateElement.style.fill = 'blue' : stateElement.style.fill = 'red';
        }
    })
});
</script>

<style scoped>
</style>