import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: [
      {id: 1, title: "Ir ao mercado", finished: false},
      {id: 2, title: "Pegar insumos para cerveja", finished: true}
    ]
  },
  mutations: {
    addTask(state, title) {
      if (title) {
        state.tasks.unshift({id: new Date().getTime(), title, finished: false});
      }
    },
    removeTask(state, id) {
      state.tasks = state.tasks.filter(task => task.id !== id);
    },
    saveTask(state, newTask) {
      let task = state.tasks.filter(task => task.id == newTask.id)[0];
      if (task)  {
        task.title = newTask.title;
      }
    },
  },
  actions: {
  },
  modules: {
  }
})
