<script setup>
import Clicker from './components/Clicker.vue';
</script>

<template>
  <Clicker>
    <button style="background-color: red;">Increment 1st counter</button>
  </Clicker>
  <Clicker>
    <button style="background-color: blue;">Increment 2nd counter</button>
  </Clicker>
</template>

<style scoped>
button{
  margin: 5px 10px;
}
</style>
