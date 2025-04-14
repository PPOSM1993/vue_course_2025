<template>
  <div class="post-card">
    <h3>Titulo</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris.</p>
    <PostButton />
  </div>
</template>

<script lang="js" setup>
import PostButton from './PostButton.vue'
</script>

<style scoped>
.post-card {
    border-radius: 15px;
    padding: 10px;
    margin: 5px;
    border: 1px solid #ccc;
}
</style>