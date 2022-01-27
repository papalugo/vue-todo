<template>
  <div>
    <v-list-item
        :class="{'light-blue lighten-4' : tarefa.finished}"
        @click="tarefa.finished = !tarefa.finished"
    >
      <template 
        v-slot:default="{}"
      >
        <v-list-item-action>
          <v-checkbox :input-value="tarefa.finished"></v-checkbox>
        </v-list-item-action>

        <v-list-item-content>
          <v-list-item-title
            :class="{'text-decoration-line-through' : tarefa.finished}"            
          >
            {{tarefa.title}}
        </v-list-item-title>
        </v-list-item-content>
        <v-list-item-action>
          <!-- <v-btn 
            icon
            @click.stop="handleRemoveTask(tarefa.id)"
          >
              <v-icon color="red dark">mdi-trash-can</v-icon>
          </v-btn> -->
          <task-menu></task-menu>
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
  props:["tarefa"],
  methods: {
    handleRemoveTask(id) {
      this.$store.commit('removeTask', id);
    }
  }
};
</script>

<style>
</style>