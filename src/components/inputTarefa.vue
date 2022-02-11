<template>
  <div class="input-field">
        <v-text-field
          v-model="inputValue"
          label="Entre uma tarefa"
          outlined
          dense
          append-outer-icon="mdi-plus-circle-outline "
          @click:append-outer = "$emit('inputEnter', inputValue)" 
          @keyup.enter="$emit('inputEnter', inputValue)"
          color = "light-blue lighten-1"
        >              
        </v-text-field>
      </div>
</template>

<script>
export default {
    propos:['inputValue'],
    data: () => ({
        inputValue:""
    }),
    methods:{
        clearInput(){
            this.inputValue = ""
        }
    }
    }
</script>

<style>

</style>