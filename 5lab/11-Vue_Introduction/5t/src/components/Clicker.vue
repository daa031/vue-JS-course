<script setup>
import { ref } from 'vue'
const count = ref(0)
const onclick = () => {
  count.value++
}
</script>

<template>
  <div>
    <div>clicked: {{ count }}</div>
    <button v-on:click="onclick">click</button>
  </div>
</template>

<style scoped>
</style>
