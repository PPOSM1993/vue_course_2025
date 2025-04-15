import { ref } from "vue";

class PostService {
    private posts

    constructor() {
        this.posts = ref([])
        console.log('PostService initialized');
    }

    getPosts() {
        return this.posts;
    }

    async fetchAll() {
        try {
            // Simulate an API call
            const url = ('https://jsonplaceholder.typicode.com/posts');
            const response = await fetch(url);
            const json = await response.json();
            this.posts.value = await json;

            console.log('Fetching posts...');
        } catch (error) {
            console.log('Error fetching posts:', error);
        }
    }
}

export default PostService