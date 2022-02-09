<template>
  <div>
    <v-dialog v-model="dialog" persistent max-width="290">
      <v-card>
        <v-card-title class="text-h5"> Editar </v-card-title>
        <v-divider></v-divider>
        <v-card-text class="mt-2">Informe o novo título.</v-card-text>
        <v-text-field
          label="Title"
          placeholder="Edit Title"
          outlined
          class="px-5"
          v-model="title"
        >
        </v-text-field>
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
            @click="handleSave()"
          >
            Save
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
      dialog: true,
      title: null,
    };
  },
  props: ['task'],
  created() {
    this.title = this.task.title
  },
  methods: {
    handleSave() {
      this.$store.dispatch('updateTaskAction', {title: this.title, _id: this.task._id});
      this.$emit('closeDialog');
    }
  }
};
</script>

<style>
</style>