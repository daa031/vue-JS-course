<script setup>
import { ref } from 'vue'

const count = ref(0)
const amount = ref(1)

const onClick = () => {
    count.value += amount.value
}
</script>

<template>
    <div>
        <div>Clicked {{ count }} times</div>
        <button v-on:click="onClick">Click!</button>
        <button @click="amount--">-</button>
        <span>{{ amount }}</span>
        <button @click="amount++">+</button>
    </div>
</template>

<style scoped>
button{
    margin: 5px 10px;
}
</style>