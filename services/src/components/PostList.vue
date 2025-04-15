<template>
    <div>
        <h1>PostList</h1>
        <ul class="posts-list">
            <li v-for="post in posts" :key="post.id">
                <h2>{{ post.title }}</h2>
                <p>{{ post.body }}</p>
            </li>

        </ul>
    </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import PostService from '@/services/PostService';
export default defineComponent({
    name: 'PostList',
    setup() {
        // Setup logic can go here, ciclo de vida del componente
        const services = new PostService();
        const posts = services.getPosts();

        onMounted(async () => {
            await services.fetchAll();
        });
        return { posts };
    }

}
);


</script>

<style scoped>
.posts-list {
    list-style-type: none;
    width: 95vw;
    height: 75px;
    padding: 20px;
}

.posts-list li {
    padding: 10px;
    widows: 100%;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-bottom: 10px;
    background-color: #f9f9f9;
}
</style>