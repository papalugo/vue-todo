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
    <DialogEdit
      v-if="items[0].modal"
      @closeDialog="closeDialog(items[0])"
      :task="task"
    >     
    </DialogEdit>
    <DialogDelete
      v-if="items[1].modal"
      @closeDialog="closeDialog(items[1])"
      :task="task"
    >     
    </DialogDelete>
  </div>
</template>

<script>
import DialogEdit from '../Dialog/DialogEdit.vue';
import DialogDelete from '../Dialog/DialogDelete.vue';
export default {
  components: { 
    DialogEdit,
    DialogDelete
  },
  data: () => ({
    items: [
      { 
        icon: "mdi-pencil",
        title: "Edit",
        modal: false,
        action(){
          console.log("editar");
          this.modal = true;
        }
      },
      { 
        icon: "mdi-trash-can",
        title: "Remove",
        modal: false,
        action() {
          console.log("remove");
          this.modal = true;
        } 
      },
    ],
  }),
  props: ['task'],
  methods: {
    closeDialog(itemMenu) {
      itemMenu.modal = false;
    }
  } 
};
</script>

<style>
</style>