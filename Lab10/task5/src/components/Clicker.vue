<script setup>
import { ref } from 'vue'

const count = ref(0)

const onClick = () => {
  count.value++
}
</script>

<template>
    <div>
        <div>Clicked here {{ count }} times</div>
        <button v-on:click="onClick">Click!</button>
    </div>
</template>

<style scoped>
div{
  margin: 10px 10px;
}
</style>