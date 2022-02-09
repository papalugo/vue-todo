import PouchDB from 'pouchdb';
import Vue from 'vue';
import Vuex from 'vuex';

let db = new PouchDB("tasksdocs");

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: []
  },

  mutations: {
    findTasks(state) {
      state.tasks= [];
      // console.log("relendo tasks...");
      db.allDocs({include_docs: true}).then((docs) => {
        for(let i =0; i< docs.rows.length; i++) {
          // console.log(docs.rows[i].doc);
          state.tasks.push(docs.rows[i].doc);
        }
      }).catch((error) => {
        console.log("Error: ", error);
      });
    },

    addTask(state, title) {
      if (title) {
        let newTitle = {
          _id: ""+new Date().getTime(), 
          title: title, 
          finished: false
        };

        db.put(newTitle).then(() => {
          console.log("Trask criado");
        }).catch((error) => {
          console.log("Error: ", error);
        });
      }
    },

    removeTask(state, id) {
      db.get(id)
      .then((task) => {
        console.log(task._id);
        return db.remove(task);
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
    },

    updateTask(state, newTask) {
      db.get(newTask._id).then((task) => {
        return db.put({
          _id: newTask._id,
          _rev: task._rev,
          title: newTask.title          
        });
      });
    },
  },
  actions: {
    addTaskAction({commit},  title) {
      commit('addTask', title);
      commit('findTasks');
    },

    updateTaskAction({commit}, task) {
      commit('updateTask', task);
      setTimeout(() =>{
        commit('findTasks');
      },100);
    },

    removeTaskAction({commit},  id) {
      commit('removeTask', id);
      setTimeout(() =>{
        commit('findTasks');
      },100);
    }
  }
})
