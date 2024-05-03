<script setup>
import { ref } from 'vue'

const count = ref(0)

const props = defineProps(['number'])

const emit = defineEmits(['button_clicked'])
const onClick = () => {
    count.value++
    emit('button_clicked', props.number, count.value)
}
</script>

<template>
    <div>Clicked {{ count }} times</div>
    <div @click="onClick">
        <slot />
    </div>
</template>