<template>
  <div class="d-flex flex-column main-container">
    <RouterView class="router-view"/>
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';
</script>

<style scoped>
.main-container {
    min-height: 100vh;
    background-color: #26262c;
}
.router-view {
    flex: 1;
}
</style>
