<script setup>
import { ref } from 'vue'

const count = ref(0)
</script>

<template>
    <div>
        <div>Clicked {{ count }} times</div>
        <div v-on:click="count++">
            <slot />
        </div>
    </div>
</template>