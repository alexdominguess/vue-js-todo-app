<template>
  <div>
    <InputTarefa @newTask = 'addNewTask'/>

    <Task 
      :tasks="$store.state.tasks" 
      @undoComplete='undoCompleteTask' 
      @completeTask='completeTask'
      @editTask='editTask'
      @deleteTask='deleteTask'
      />
  </div>
</template>

<script>

  import InputTarefa from '../components/inputTarefa.vue'
  import Task from '../components/Task.vue'
  export default {
    components: { Task, InputTarefa },

    methods:{
      addNewTask(newTask){
        this.$store.commit('addNewTask', newTask)
        this.updateLocalStorage()
      },
      undoCompleteTask(index){
        this.$store.commit('undoCompleteTask', index)
        this.updateLocalStorage()
      },
      completeTask(index){
        this.$store.commit('completeTask', index)
        this.updateLocalStorage()
      },
      editTask(index, newTile){
        var editData = {index, newTile}
        this.$store.commit('editTask', editData)
        this.updateLocalStorage()
      },
      deleteTask(index){
        this.$store.commit('deleteTask', index)
        this.updateLocalStorage()
      },
      getData(){
          var allTasks = localStorage.getItem('tasks');
          allTasks = JSON.parse(allTasks)
          if(allTasks){
            this.$store.commit('getData', allTasks)
          }
      },
      updateLocalStorage() {
          var data = this.$store.state.tasks
          localStorage.setItem('tasks', JSON.stringify(data))
        }
    },

    beforeMount(){
      this.getData()
    }
}
</script>

<style>

</style>