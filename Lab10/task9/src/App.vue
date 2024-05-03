<script setup>
import Clicker from './components/Clicker.vue';

const alertion = (number, count) =>{
  alert(`${number}, ${count}`)
}
</script>

<template>
  <div v-for="n in 100">
    <Clicker @button_clicked="alertion" :number="n">
      <textarea name="Clicked" id="" cols="30" rows="10">
        Clicker number {{ n }}
      </textarea>
    </Clicker>
  </div>
</template>

<style scoped>
</style>
