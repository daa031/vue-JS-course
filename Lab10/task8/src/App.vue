<script setup>
import { ref } from 'vue'
import Clicker from './components/Clicker.vue';

const general_count = ref(0)
</script>

<template>
  <div>Total clicks: </div>
  <div>{{ general_count }}</div>
  <Clicker @button_clicked="(value) => general_count += value"/>
  <Clicker @button_clicked="(value) => general_count += value"/>
</template>

<style scoped>
</style>
