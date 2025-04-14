<template>
    <div>
        <h1>Cycle Option</h1>
    </div>
</template>

<script lang="ts" setup>
import { onMounted, onUpdated } from 'vue';

onMounted(() => {
    console.log('CycleOption component mounted');
});
onUpdated(() => {
    console.log('CycleOption component updated');
});
</script>

<style scoped></style>