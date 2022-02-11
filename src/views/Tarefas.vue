<template>
  <div class="main">
    <Tarefa />
  </div>
</template>

<script>
import Tarefa from '../components/Tarefa.vue'
  export default {
    components:{
      Tarefa,
    },
  }
</script>

<style>
  .main{
    margin: 10px;
  }
  .input-field{
    margin-top: 20px;
    margin-bottom: 0;
    display: flex;
  }
  .input-field i{
    display: flex;
    align-items:flex-start
  }


</style>

