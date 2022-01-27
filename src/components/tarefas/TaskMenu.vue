<template>
  <div>
    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn v-bind="attrs" v-on="on" icon>
          <v-icon> mdi-dots-vertical </v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item 
          v-for="(item, index) in items" 
          :key="index" 
          @click="item.action()"
        >
          <v-list-item-title>
            <v-icon
              left              
            >
              {{item.icon}}
            </v-icon>
            {{item.title}}
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    <dialog-edit>
      
    </dialog-edit>
  </div>
</template>

<script>
import DialogEdit from '../Dialog/DialogEdit.vue';
export default {
  components: { DialogEdit },
  data: () => ({
    items: [
      { 
        icon: "mdi-pencil",
        title: "Edit",
        action(){
          console.log("editar");
        }
      },
      { 
        icon: "mdi-trash-can",
        title: "Remove",
        action() {
          console.log("remove");
        } 
      },
    ],
  }),
};
</script>

<style>
</style>