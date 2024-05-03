<script setup>
import { ref } from 'vue'

const count = ref(0)

const onClick = () => {
  count.value++
}
</script>

<template>
  <div>
    <div>Clicked {{ count }} times</div>
    <button v-on:click="onClick">Click!</button>
  </div>
</template>

<style scoped>
</style>
