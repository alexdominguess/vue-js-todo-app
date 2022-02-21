<template>
  <div>
      
    <v-list>
            <template v-for="(item, index) in tasks">
                <v-list-item v-bind:class=item.status :key="index"> <!-- change call name acordingly to the status -->
                    <template >

                        <v-list-item-action>
                            <v-icon @click="$emit('undoComplete', index)" v-if="item.status == 'completed'" color="red lighten-1">mdi-checkbox-marked-circle-outline</v-icon>
                            <v-icon @click="$emit('completeTask', index)" v-else color="blue lighten-1">mdi-checkbox-blank-circle-outline</v-icon>
                        </v-list-item-action>


                        <v-list-item-content >
                            <v-list-item-title v-text="item.task"></v-list-item-title>
                        </v-list-item-content>

                        <v-list-item-action>
                            <v-icon class="trash-icon"  v-if="item.status == 'completed'" color="red lighten-1" @click="$emit('deleteTask', index)">mdi-trash-can-outline</v-icon>

                            <!-- This recives the emitted event from the child and will send to the parent where the editTask function is -->
                            <ModalEditarTarefa v-else :task="item.task" :taskIndex="index" @editTask='$parent.editTask'/>
                            
                        </v-list-item-action>
                        

                    </template>
                </v-list-item>
            </template>

    </v-list>
  </div>
</template>

<script>
import ModalEditarTarefa from './ModalEditarTarefa.vue'
export default {
  components: { ModalEditarTarefa },
    props:['tasks'],
}
</script>

<style>
    .not-completed{
        background-color: rgb(241, 241, 241);
        margin: 10px 20px;
        padding:  5px 15px 5px 15px;
        border-radius: 10px;
    }

    .completed{
        background-color: rgb(252, 210, 210);
        padding:  5px 15px 5px 15px;
        margin: 10px 20px;
        border-radius: 10px;
    }

    .completed .v-list-item__title{
        text-decoration:line-through;
        color: red;
    }

    .v-application--is-ltr .v-list-item__action:first-child{
        margin-right: 10px;
    }

    .trash-icon{
        margin-right: 0px;
    }

</style>