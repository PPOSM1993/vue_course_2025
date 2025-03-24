<script setup>
import { ref } from "vue";

let numer = ref(0);

setInterval(() => {
  numer.value++;
}, 1);

let name = 'Perro'
</script>

<template>
  <h1>Hello {{ numer }}</h1>
</template>

<style scoped></style>
