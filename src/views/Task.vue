<template>
  <div>
    <v-list
      flat
      subheader
    >
      <v-row class="ml-1 mt-1">
        <v-col
          cols="12"
        >
          <v-text-field
            v-model="fieldInput"
            label="How are yor task?"
            outlined
            clearable
            @keyup.enter="handleAddTask"
          ></v-text-field>
        </v-col>
      </v-row>  
      <v-list-item-group
        multiple
        active-class=""
      >
      <div
        v-for="task, index in $store.state.tasks"
        :key="index"
      >
        <TaskComponnent
          :task="task"
        />
      </div>

      </v-list-item-group>
    </v-list>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import Vuex from 'vuex';
  import TaskComponnent from '../components/tasks/Task.vue';

  Vue.use(Vuex);

  export default Vue.extend({
    name: 'Task',

    components: {
      TaskComponnent
    },
    data: () => ({
      fieldInput: null,
    }),
    methods: {
      handleAddTask() {
        // this.$store.commit('addTask', this.fieldInput);
        this.$store.dispatch('addTaskAction', this.fieldInput);
        this.fieldInput = null;
      }
    },
    created() {
      this.$store.commit('findTasks');
    }
  })  
</script>
