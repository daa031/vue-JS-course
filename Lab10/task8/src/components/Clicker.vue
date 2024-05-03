<script setup>
import { ref } from 'vue'

const count = ref(0)

const emit = defineEmits(['button_clicked'])
const onClick = () => {
    count.value++
    emit('button_clicked', 1)
}
</script>

<template>
    <div>Clicked {{ count }} times</div>
    <button @click="onClick">Click!</button>
</template>