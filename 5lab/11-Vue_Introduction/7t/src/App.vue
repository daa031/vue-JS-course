<script setup>
import Clicker from './components/Clicker.vue';
</script>

<template>
  <Clicker>
    <button>Increment 1</button>
  </Clicker>
  <Clicker>
    <button>Increment 2</button>
  </Clicker>
</template>

<style scoped>
  button{
    margin: 10px 15px;
  }
</style>