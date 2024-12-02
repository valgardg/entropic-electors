<template>
    <div  
        class="popup" 
        :style="{ top: popupPosition.top + 'px', left: popupPosition.left + 'px' }">
        <div class="h5">{{ stateInfo.stateName }}</div>
        <div>{{ stateInfo.democratPercent }}</div>
        <div>{{ stateInfo.republicanPercent }}</div>
    </div>
</template>

<script setup lang="ts">
import { withDefaults } from 'vue';

const props = withDefaults(defineProps<{
    popupPosition: Object,
    stateInfo?: Object,
}>(), {
    popupPosition: { top: 0, left: 0 },
    stateInfo: {
        stateName: 'State Name',
        democratPercent: 50,
        republicanPercent: 50,
    }
});

// access tempProp through props.tempProp.value
</script>

<style scoped>
.popup {
    position: absolute;
    background-color: white;
    border: 1px solid #ccc;
    padding: 10px;
    border-radius: 5px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    font-size: 14px;
    color: #333;
    pointer-events: none;
    z-index: 999;
}
</style>