<template>
  <div style="display:flex; align-items: center; justify-content: center; margin: -30px; padding: 50px 20px 0px 20px">
    <v-col cols="12" >
        <v-text-field 
            class="mx-8"
            v-model="newTask"
            label="Nova tarefa"
            outlined
            clearable
            append-outer-icon="mdi-plus-circle-outline"
            @click:append-outer="$emit('newTask', newTask), newTask=''"
            @keyup.enter="$emit('newTask', newTask), newTask=''"
        ></v-text-field>        
    </v-col>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        newTask: '',
      }
    },
  }
</script>

<style>
 .v-input__icon.v-input__icon--append-outer button {
  font-size: 35px;
  color: rgb(153, 153, 153);
  }
</style>