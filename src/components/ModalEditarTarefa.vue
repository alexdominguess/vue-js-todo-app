<template>
    <div>
        <template>
            <v-row justify="center">
                <v-dialog v-model="dialog" persistent max-width="500">
                    <template v-slot:activator="{ on, attrs }">
                        <v-icon
                            color="blue lighten-1"
                            dark
                            v-bind="attrs"
                            v-on="on"
                        >
                            mdi-clipboard-edit-outline
                        </v-icon>
                    </template>
                    <v-card>
                        <v-card-title class="text-h5">Editar tarefa</v-card-title>
                        <!-- Can not pass the task from the props bcs props data can not be changed in child -->
                        <v-textarea
                            v-model="taskk"
                            outlined
                            auto-grow
                            rows="2"
                            row-height="30"
                            style="background-color: rgb(254, 255, 255); margin:10px"
                            @keyup.enter="dialog = false, $emit('editTask', taskIndex, taskk)" 
                        ></v-textarea>

                        <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                            color="grey darken-1"
                            text
                            @click="dialog = false, taskk=task"
                        >
                            Cancelar
                        </v-btn>
                        <!-- This will emit event to the parent (Task.vue) and parent will emit to grandPartent (TasksView.vue)-->
                        <v-btn
                            color="blue darken-1"
                            text
                            @click="dialog = false, $emit('editTask', taskIndex, taskk)" 
                        >
                            Salvar
                        </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
            </v-row>
        </template>
    </div>    
</template>

<script>
  export default {
    props:['task', 'taskIndex'],
    data () {
      return {
        dialog: false,
        taskk: this.task
      }
    },
  }
</script>

<style>
.v-list-item__action{
    display: flex;
    justify-content: center;
}

</style>