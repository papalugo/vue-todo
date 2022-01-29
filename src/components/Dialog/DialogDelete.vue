<template>
  <div>
    <v-dialog v-model="dialog" persistent max-width="290">
      <v-card>
        <v-card-title class="text-h5"> Delete </v-card-title>
        <v-divider></v-divider>
        <v-card-text class="mt-2">There are you sure to delete task?.</v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn 
            color="orange darken-1" 
            text 
            @click="$emit('closeDialog')"
          >
            Cancel
          </v-btn>
          <v-btn 
            color="green darken-1" 
            text 
            @click="handleRemove()"
          >
            Delete
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialog: true
    };
  },
  props: ['task'],
  created() {
  },
  methods: {
    handleRemove() {
      this.$store.commit('removeTask', this.task.id);
      this.$emit('closeDialog');
    }
  }
};
</script>

<style>
</style>