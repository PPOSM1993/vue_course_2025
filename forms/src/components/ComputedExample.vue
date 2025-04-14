<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'ComputedExample',
    data() {
        return {
            message: 'Hola mundo'
        };
    },
    computed: {
        reverse(): string {
            return this.message.split('').reverse().join('');
        }
    }
});
</script>

<template>
  <div>
    <p>Mensaje original: {{ message }}</p>
    <p>Mensaje invertido: {{ reverse }}</p>
  </div>
</template>