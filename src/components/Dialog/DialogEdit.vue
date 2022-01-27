<template>
  <div>
    <v-dialog v-model="dialog" persistent max-width="290">
      <v-card>
        <v-card-title class="text-h5">
          Editar
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text class="mt-2">Informe o novo título.</v-card-text>
          <v-text-field
            label="Title"
            placeholder="New Title"
            outlined
            class="px-5"
          >
        </v-text-field>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="orange darken-1" text @click="dialog = false">
            Cancel
          </v-btn>
          <v-btn color="green darken-1" text @click="dialog = false">
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        dialog: true,
      }
    },
  }
</script>

<style>
</style>