<script>
export default {
  name: 'CounterOption',
  components: {},
  data() {
    return {
      counter: 0
    };
  },
  methods: {
    increment() {
      this.counter++;
    }
  }
};
</script>

<template>
  <div>
    <p>Counter: {{ counter }}</p>
    <button @click="increment">Increment</button>
  </div>
</template>

<style></style>