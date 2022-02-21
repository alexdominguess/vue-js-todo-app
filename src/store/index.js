// Vuex works like the DB of the project, is where the data is stored and can be accessed by all the components

// 'state' is where the data is stored

// 'mutations' is where the function goes to change the data in state. State can not be changed direclty. Await functions
// To a component to call functions in 'action' 'commit' should be used - 'this.store.commit('functionName', args)'

// 'actions' action calls mutation to change the state but the mutation can be called directly
// To a component to call functions in 'action' 'dispatch' should be used - 'this.store.dispach('functionName', args)'
// 'context' is used to call function from mutation for example: context.commit('mutationFunctionName', args)


import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        tasks: []
    },
    mutations: {
        getData(context, data) {
            this.state.tasks = data
        },

        addNewTask(context, newTask) {
            if (newTask) {
                this.state.tasks.push({ task: newTask, status: 'not-completed' })
            }
        },

        undoCompleteTask(context, index) {
            this.state.tasks[index].status = 'not-completed'
        },

        completeTask(context, index) {
            this.state.tasks[index].status = 'completed'
        },

        editTask(context, data) {
            this.state.tasks[data.index].task = data.newTile
        },

        deleteTask(context, index) {
            this.state.tasks.splice(index, 1)
        },
    },
    actions: {},
    modules: {}
})