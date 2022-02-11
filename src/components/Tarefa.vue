<template>

  <div>
      <inputTarefa inputValue ="inputValue" @inputEnter='addTasks'/>

      <v-list two-line>
        <template v-for="(item, index) in tasks">
            <!-- This is for the completed ones -->
          <v-list-item  @click="undoCompleteTask(index)" v-if="item.completed" :key="index" class="red lighten-4 tasks">
            <template >
              <v-list-item-content>
                <v-list-item-title v-text="item.title" class="text-decoration-line-through"></v-list-item-title>
              </v-list-item-content>

              <v-menu offset-y>
                <template v-slot:activator="{ on,}">
                  <v-icon
                    color="red lighten-1"
                    dark
                    v-on="on"
                  >
                    mdi-menu
                  </v-icon>
                </template>
                <v-list>
                  <v-list-item>
                    <v-icon left>mdi-pencil-outline</v-icon>
                    <v-list-item-title>Editar</v-list-item-title>
                  </v-list-item>
                  <v-list-item   @click="deleteTask(index)">
                    <v-icon left>mdi-trash-can-outline</v-icon>
                    <v-list-item-title>Excluir</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </template>
          </v-list-item>
          
          <!-- This is for the NOT completed ones -->
          <v-list-item @click="completeTask(index)" v-else :key="index" class="tasks blue lighten-4">
            <template >
              <v-list-item-content>
                <v-list-item-title v-text="item.title"></v-list-item-title>
              </v-list-item-content>

              <v-menu offset-y>
                <template v-slot:activator="{ on,}">
                  <v-icon
                    color="blue lighten-1"
                    dark
                    v-on="on"
                  >
                    mdi-menu
                  </v-icon>
                </template>
                <v-list>
                  <v-list-item>
                    <v-icon left>mdi-pencil-outline</v-icon>
                    <v-list-item-title>Editar</v-list-item-title>
                  </v-list-item>
                  <v-list-item  @click="completeTask(index)">
                    <v-icon left>mdi-check-outline</v-icon>
                    <v-list-item-title >Completar</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </template>
          </v-list-item>

        </template>

    </v-list>
  </div>
</template>

<script>
import inputTarefa from './inputTarefa.vue'
export default {
  components: { inputTarefa },
  beforeMount(){
    this.getAllTasks()
 },
    data: () => ({
      tasks:[]
    }),

    methods:{
      getAllTasks(){
          this.tasks = JSON.parse(localStorage.getItem('tasks'))
          console.log('get all - ', this.tasks)
          if(!this.tasks){
            localStorage.setItem('tasks', JSON.stringify([]));
            this.getAllTasks()
          }
        },

        completeTask(index){
          this.tasks[index].completed = true
          localStorage.setItem('tasks', JSON.stringify(this.tasks));
          this.tasks = JSON.parse(localStorage.getItem('tasks'))
        },

        undoCompleteTask(index){
          this.tasks[index].completed = false
          localStorage.setItem('tasks', JSON.stringify(this.tasks));
          this.tasks = JSON.parse(localStorage.getItem('tasks'))
        },

        deleteTask(index){
          console.log('delete1 - ',index ,this.tasks)
          this.tasks.splice(index, 1)
          console.log('delete2 - ',this.tasks)
          localStorage.setItem('tasks', JSON.stringify(this.tasks))
        },

        addTasks(newTask){
            if(!newTask){
              alert('Campo Tarefa não pode ser vazio!')
            }else{
              this.tasks.push({title:newTask, completed:false})
              localStorage.setItem('tasks', JSON.stringify(this.tasks))
            }
            
        },
    }
}
</script>

<style>
    .tasks{
        border-radius: 10px;
        margin-top: 10px;
    }
</style>