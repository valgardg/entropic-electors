<template>
    <div class="container d-flex flex-column justify-content-start align-items-center main-content mt-5">
        <p class="fs-1">Entropic Electors</p>
        <UsMap/>
        <!-- Popup for state information -->
        <StatePopup v-if="showPopup" :popupPosition="popupPosition" :stateInfo="stateInfo"/>
    </div>
</template>

<script setup lang="ts">
import UsMap from '@/components/UsMap.vue';
import { ref, onMounted } from 'vue';
import { States } from '@/utils/states';
import StatePopup from '@/components/StatePopup.vue';

// Reactive variables to manage the popup state
const showPopup = ref(false);
const popupText = ref('');
const popupPosition = ref({ top: 0, left: 0 });
const stateInfo = ref({
    stateName: 'State Name',
    democratPercent: 50,
    republicanPercent: 50,
});

// Function to handle mouseover on state
const showStateInfo = (stateCode: string, event: MouseEvent) => {
    const newStateInfo = States[stateCode];
    if (newStateInfo) {
        stateInfo.value.stateName = newStateInfo.name;
        stateInfo.value.democratPercent = newStateInfo.democratPercent;
        stateInfo.value.republicanPercent = newStateInfo.republicanPercent;

        console.log(`Updated stateInfo: ${stateInfo.value}`);

        showPopup.value = true;
        // Position the popup where the mouse is
        popupPosition.value = {
            top: event.clientY + 10, // Offset the popup slightly from the mouse
            left: event.clientX + 10
        };
    }
};

// Function to hide the popup when mouse leaves the state
const hideStateInfo = () => {
    showPopup.value = false;
};

const states = ref(States);
onMounted(() => {
    Object.keys(states.value).forEach(stateCode => {
        const stateElement = document.getElementById(stateCode);
        console.log(`looking at element with id ${stateCode}`);
        if (stateElement) {
            // Add hover events for each state
            stateElement.addEventListener('mouseover', (event) => showStateInfo(stateCode, event));
            stateElement.addEventListener('mouseout', hideStateInfo);
            
            States[stateCode].democratPercent > States[stateCode].republicanPercent ? stateElement.style.fill = 'blue' : stateElement.style.fill = 'red';
        }
    })
});
</script>

<style scoped>
</style>