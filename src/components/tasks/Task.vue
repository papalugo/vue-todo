<template>
  <div>
    <v-list-item
        :class="{'light-blue lighten-4' : task.finished}"
        @click="task.finished = !task.finished"
    >
      <template 
        v-slot:default="{}"
      >
        <v-list-item-action>
          <v-checkbox :input-value="task.finished"></v-checkbox>
        </v-list-item-action>

        <v-list-item-content>
          <v-list-item-title
            :class="{'text-decoration-line-through' : task.finished}"            
          >
            {{task.title}}
        </v-list-item-title>
        </v-list-item-content>
        <v-list-item-action>
          <TaskMenu
            :task="task"
          >
          </TaskMenu>
        </v-list-item-action>
      </template>
    </v-list-item>
    <v-divider></v-divider>
  </div>
  
</template>

<script>
import TaskMenu from './TaskMenu.vue';

export default {
  components: {
    TaskMenu
  },
  props:["task"],
  methods: {
    handleRemoveTask(id) {
      this.$store.commit('removeTask', id);
    }
  }
};
</script>

<style>
</style>